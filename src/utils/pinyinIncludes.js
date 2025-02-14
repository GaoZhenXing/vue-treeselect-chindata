import { pinyin } from 'pinyin-pro/dist/index.mjs'

export function pinyinIncludes(arrOrStr, elem) {
  if (Array.isArray(arrOrStr)) {
    return arrOrStr.indexOf(elem) !== -1
  }
  // 中文转拼音（全拼）
  const fullPinyin = pinyin(arrOrStr, { toneType: 'none', separator: '' })
  // 中文转首字母
  const initialPinyin = pinyin(arrOrStr, { pattern: 'first', toneType: 'none', separator: '' })
  // 原始文本匹配
  return arrOrStr.includes(elem)
    // 全拼匹配
    || fullPinyin.includes(elem)
    // 首字母匹配
    || initialPinyin.toLowerCase().includes(elem)
}
