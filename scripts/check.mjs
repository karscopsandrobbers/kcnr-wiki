// Checks every page the way a pull request is checked: a header with the fields the site needs, text under it, only
// <kbd> as HTML, and links to pages that exist. The site's build is the final word on the header's values.
// Usage: node scripts/check.mjs
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const GAMES = ['kcnrv'];
const REQUIRED = ['title', 'summary', 'section', 'order'];
/** Addresses the site uses for itself. */
const RESERVED = new Set(['edit', 'api', 'auth']);
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const problems = [];

for (const game of GAMES) {
	const files = readdirSync(game).filter((name) => name.endsWith('.md'));
	const slugs = new Set(files.map((name) => name.slice(0, -3)));

	for (const name of files) {
		const slug = name.slice(0, -3);
		const where = `${game}/${name}`;
		const text = readFileSync(join(game, name), 'utf8').replace(/\r\n?/g, '\n');
		const report = (problem) => problems.push(`${where}: ${problem}`);

		if (!SLUG.test(slug)) report('file names are lowercase words joined by hyphens');
		if (RESERVED.has(slug)) report(`"${slug}" is an address the site uses itself`);

		const header = /^---\n([\s\S]*?)\n---(?:\n|$)/.exec(text);
		if (!header) {
			report('the page must start with its header block, between two --- lines');
			continue;
		}
		for (const field of REQUIRED) {
			if (!new RegExp(`^${field}:\\s*\\S`, 'm').test(header[1])) report(`the header has no ${field}`);
		}

		const body = text.slice(header[0].length);
		if (body.trim() === '') report('there is no text under the header');
		const prose = body.replace(/^(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\1[^\n]*$/gm, '').replace(/`[^`\n]*`/g, '');
		for (const [tag] of prose.matchAll(/<\/?[a-z][^>\n]*>/gi)) {
			if (!/^<\/?kbd>$/i.test(tag) && !/^<(?:https?:\/\/|mailto:)/i.test(tag)) report(`only <kbd> is allowed as HTML: ${tag}`);
		}
		for (const [, target] of prose.matchAll(/\]\(\.\.\/([^/)]+)\/\)/g)) {
			if (!slugs.has(target)) report(`links to ../${target}/, which is not a page`);
		}
		if (/\]\(\s*<?\s*(?:javascript|data|vbscript):/i.test(prose)) report('links must go to web pages or other wiki pages');
	}
}

if (problems.length > 0) {
	console.error(problems.join('\n'));
	process.exit(1);
}
console.log('Every page checks out.');
