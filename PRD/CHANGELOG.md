# Changelog — sierra-enterprise-ai-agent

> 所有重要變更都會記錄於此檔案。
> 格式參考 [Keep a Changelog](https://keepachangelog.com/zh-TW/1.1.0/)

---

## v3.0.2 — 2026-09-06 · Sean 10-repo-fleet Fleet Alignment

**完成於 2026-09-06 by Sean 10-repo-fleet**

### Changed
- 維護者由 `Sophia (CPO) for Sean` 改為 `Sean 10-repo-fleet`
- `PRD/SPEC.md` 新增 v3.0.2 banner header
- 對齊 SPEC v3.0 契約（§1–§19 全部套用）
- 既有 v3.0 sweet-spot rewrite §1–§16（893 行）內容完整保留

### Added
- §17 監控與可觀測性（uptime / p95 latency / 業務指標 / 告警通道 / log 保留）
- §18 維運（部署流程 / 環境分層 / 環境變數 / rollback / 維運時段）
- §19 安全（OWASP Top 10 對照 / Secret 管理 / PDPA / Rate Limit / Dependency Audit）
- §20 變更日誌摘要
- `.github/workflows/ci.yml` — 4-job CI（lint / test / build / deploy-to-Vercel）

### Notes
- 此 repo 已有完整 v3.0 PRD（893 行，含 16 章 sweet-spot rewrite 內容）
- v3.0.2 為 Fleet 對齊版，不重寫既有內容，僅補 §17–§19 三章
- Deploy 目標：**Vercel**（Next.js 16.2.3 + React 19.2.4）
- 商業化評分：6.8/10（sweet-spot rewrite v2）

---

## v3.0 — 2026-07-19 · Sweet-Spot Rewrite v2

> 原始撰寫：Sophia (CPO) for Sean
> 對齊技術：Alan (CTO) + Hermes Agent

### Changed
- 完全放棄「通用企業客服 AI」定位
- 改做「台灣中小企業 LINE 官方帳號專用 AI 客服」

### Added
- §1.1 甜蜜點分析：Intercom Fin / Sierra / Ada / Zendesk AI 在台灣 LINE 0% 滲透率
- §1.2 4 個 Persona（手搖飲連鎖主 / 電商賣家 / 補習班 / 不做的 Non-Persona）
- §1.4 KPI：6 個月 500 註冊 / 80 付費 / NT$240K MRR；12 個月 3,000 註冊 / 500 付費 / NT$1.5M MRR
- §16.2 Sweet-Spot 強化：30 萬 LINE OA 觸達 + 48 產業範本 SOP + 國台客語 14 萬條資料
- 商業化評分：6.0 → 6.8/10

---

## v2.2.1 — 2026-06 · 通用企業客服 AI 定位

- 5 人團隊 NT$210 萬 / 24/7 NT$504-672 萬痛點分析
- Intercom Fin / Salesforce / Zendesk 競品對照
- 評分 2/10（被碾壓）

---

## v1 — 2026-04 · 初版

- Next.js 14 + GPT-4o 基礎 FAQ Bot
- Stripe 訂閱 + Supabase 對話記錄
- Multi-language (繁中 / 簡中 / 英文)
