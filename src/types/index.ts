export interface GuideBookDataListType {
  제목: string;
  제작처: string;
  "지역(시_도)": string;
  "지역(시_군_구)": string;
  "가이드북 링크": string;
}

export interface GuideBookType {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  matchCount: number;
  data: GuideBookDataListType[];
}

export type oauth2Type = "naver" | "kakao" | "google";
