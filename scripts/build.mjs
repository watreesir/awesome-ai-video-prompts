// Build README.md, README.zh-CN.md and site/ from data/. Usage: node scripts/build.mjs [--check]
import fs from 'node:fs'; import path from 'node:path';
const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const cats = JSON.parse(fs.readFileSync(`${root}/data/categories.json`, 'utf8'));
const REQ = ['id','title','category','prompt_en','prompt_zh','aspect_ratio','duration','model_tested','why_it_works','variations','result_check','sources'];
const errs = []; const ids = new Set();
const prompts = fs.readdirSync(`${root}/data/prompts`).filter(f => f.endsWith('.json')).sort().map(f => {
  let p; try { p = JSON.parse(fs.readFileSync(`${root}/data/prompts/${f}`, 'utf8')); } catch (e) { errs.push(`${f}: invalid JSON`); return null; }
  for (const k of REQ) if (!(k in p)) errs.push(`${f}: missing ${k}`);
  if (ids.has(p.id)) errs.push(`${f}: duplicate id ${p.id}`); ids.add(p.id);
  if (`${p.id}.json` !== f) errs.push(`${f}: filename != id`);
  if (!cats[p.category]) errs.push(`${f}: unknown category ${p.category}`);
  if ('test_status' in p) errs.push(`${f}: test_status is not used; remove it`);
  if (!Array.isArray(p.model_tested)) errs.push(`${f}: model_tested must be an array`);
  return p; }).filter(Boolean);
for (const c of Object.keys(cats)) { const n = prompts.filter(p => p.category === c).length; if (n < 5) errs.push(`category ${c}: ${n} < 5`); }
if (errs.length) { console.error(errs.join('\n')); process.exit(1); }
const by = c => prompts.filter(p => p.category === c);
const HOME = 'https://everygenai.io/';
const GUIDE = 'https://everygenai.io/guides/video-prompt-guide';
const SPACE = 'https://huggingface.co/spaces/everygen-ai/awesome-ai-video-prompt-builder';
const MODEL = 'https://everygenai.io/guides/choose-a-model';
const md = zh => {
  const L = [];
  L.push(zh ? '# AI 视频提示词合集' : '# Awesome AI Video Prompts', '');
  L.push(zh ? '[English](README.md) | 简体中文' : 'English | [简体中文](README.zh-CN.md)', '');
  L.push(zh ? `${prompts.length} 条原创 AI 视频提示词，分 ${Object.keys(cats).length} 类。每条包含英文/中文提示词、设计理由、变体和结果检查点。提示词采用 CC0，可自由使用。`
            : `${prompts.length} original AI video prompts in ${Object.keys(cats).length} categories. Each entry has an English and Chinese prompt, why it works, variations and a result checklist. Prompts are CC0.`, '');
  L.push(zh ? `维护者：[Everygen AI](${HOME})，一个在浏览器里创作 AI 视频、图片和音乐的工作室。` : `Maintained by [Everygen AI](${HOME}), a browser studio for AI video, image and music creation.`, '');
  L.push(zh ? `想快速拼一条结构化提示词？试试在线的 [AI 视频提示词构建器](${SPACE})（纯规则、浏览器内运行、不调用 API）。` : `Want to assemble your own? Try the rule-based [AI Video Prompt Builder on Hugging Face](${SPACE}) (runs in your browser, no API).`, '');
  L.push(zh ? '## 目录' : '## Contents', '');
  for (const [k, v] of Object.entries(cats)) L.push(`- [${zh ? v.zh : v.en}](#${k}) (${by(k).length})`);
  L.push('');
  for (const [k, v] of Object.entries(cats)) {
    L.push(`<a id="${k}"></a>`, '', `## ${zh ? v.zh : v.en}`, '');
    for (const p of by(k)) {
      L.push(`### ${p.title} \`${p.id}\``, '', `\`${p.aspect_ratio}\` · \`${p.duration}\``, '');
      L.push('```text', zh ? p.prompt_zh : p.prompt_en, '```', '');
      if (!zh) L.push('<details><summary>中文</summary>', '', '```text', p.prompt_zh, '```', '', '</details>', '');
      L.push(`**${zh ? '设计理由' : 'Why it works'}:** ${p.why_it_works}`, '');
      L.push(`**${zh ? '变体' : 'Variations'}:** ${p.variations.join('; ')}`, '');
      L.push(`**${zh ? '结果检查' : 'Result check'}:**`, ...p.result_check.map(r => `- [ ] ${r}`), '');
    }
  }
  L.push(zh ? '## 参与贡献\n\n见 [CONTRIBUTING.md](CONTRIBUTING.md) 与 [docs/prompt-structure.md](docs/prompt-structure.md)。\n\n## 许可\n\n提示词：CC0 1.0（LICENSE-CONTENT）；代码：MIT（LICENSE-CODE）。'
            : '## Contributing\n\nSee [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/prompt-structure.md](docs/prompt-structure.md).\n\n## License\n\nPrompts: CC0 1.0 (LICENSE-CONTENT). Code: MIT (LICENSE-CODE).');
  return L.join('\n') + '\n';
};
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
const page = (title, desc, body, foot) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc)}"><link rel="stylesheet" href="style.css"></head><body><main>${body}<footer>${foot}<p>Prompts CC0 · Code MIT</p></footer></main></body></html>\n`;
const card = p => `<article id="${p.id}"><h3>${esc(p.title)}</h3><p class="meta">${p.aspect_ratio} · ${p.duration}</p><pre>${esc(p.prompt_en)}</pre><details><summary>中文</summary><pre>${esc(p.prompt_zh)}</pre></details><p><b>Why it works:</b> ${esc(p.why_it_works)}</p><p><b>Variations:</b> ${esc(p.variations.join('; '))}</p><p><b>Result check:</b></p><ul>${p.result_check.map(r=>`<li>${esc(r)}</li>`).join('')}</ul></article>`;
const out = {};
out['README.md'] = md(false); out['README.zh-CN.md'] = md(true);
const nav = `<nav><a href="index.html">All</a> ${Object.entries(cats).map(([k,v])=>`<a href="${k}.html">${esc(v.en)}</a>`).join(' ')}</nav>`;
out['site/index.html'] = page('Awesome AI Video Prompts – 30 original prompts with result checks', 'Original, CC0 AI video prompts for shorts, product ads, UGC, cinematic shots, anime and landscapes, each with variations and a result checklist.',
  `<h1>Awesome AI Video Prompts</h1><p>${prompts.length} original prompts with variations and a result checklist.</p>${nav}<ul>${Object.entries(cats).map(([k,v])=>`<li><a href="${k}.html">${esc(v.en)}</a> — ${by(k).length} prompts</li>`).join('')}</ul>`,
  `<p>New to prompt structure? Read this <a href="${GUIDE}">step-by-step guide to writing AI video prompts</a>. Maintained by <a href="${HOME}">Everygen AI</a>, a browser studio for AI video, image and music.</p>`);
for (const [k,v] of Object.entries(cats)) out[`site/${k}.html`] = page(`${v.en} AI Video Prompts – Awesome AI Video Prompts`, `${by(k).length} original ${v.en.toLowerCase()} prompts for AI video models, with variations and result checks.`,
  `<h1>${esc(v.en)} prompts</h1>${nav}${by(k).map(card).join('')}`,
  `<p>Not sure which model fits this style? See <a href="${MODEL}">how to pick a video model for your project</a>. Maintained by <a href="${HOME}">Everygen AI</a>.</p>`);
out['site/style.css'] = 'body{font:16px/1.6 system-ui,sans-serif;margin:0;color:#222}main{max-width:820px;margin:auto;padding:16px}pre{white-space:pre-wrap;background:#f5f5f5;padding:12px;border-radius:6px}nav a{margin-right:10px;display:inline-block}article{border-top:1px solid #ddd;padding-top:8px}.meta{color:#666}footer{margin-top:32px;border-top:1px solid #ddd;font-size:14px}\n';
const check = process.argv.includes('--check'); let drift = 0;
for (const [f, c] of Object.entries(out)) { const fp = `${root}/${f}`;
  if (check) { if (!fs.existsSync(fp) || fs.readFileSync(fp,'utf8') !== c) { console.error(`out of date: ${f}`); drift++; } }
  else { fs.mkdirSync(path.dirname(fp), { recursive: true }); fs.writeFileSync(fp, c); } }
if (drift) process.exit(1);
console.log(`${check ? 'checked' : 'built'} ${prompts.length} prompts, ${Object.keys(out).length} files`);
