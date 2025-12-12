export type View = 'login' | 'spirit_body' | 'spirit_pool' | 'spirit_state' | 'spirit_field' | 'lingdan_engine';

export interface UserProfile {
  username: string;
  role: string;
}

export interface SpiritMetrics {
  work: number;    // 作品
  product: number; // 产品
  commodity: number; // 商品
  item: number;    // 用品
}

export interface LingdanResult {
  kit: string;       // 锦囊 (Kit/Tip) - Actionable advice
  strategy: string;  // 妙计 (Strategy) - Tactical plan
  blueprint: string; // 棋谱 (Blueprint) - Strategic roadmap
}

export enum SpiritLevel {
  Event = '事件级',
  Flow = '流程级',
  Focus = '聚焦态',
  Organization = '组织级',
  Capability = '能力级',
}

export interface Project {
  id: string;
  name: string;
  resilienceScore: number;
  status: 'active' | 'testing' | 'deployed';
  domain: string;
}