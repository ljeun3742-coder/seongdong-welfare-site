'use strict';

/*
 * Supabase 설정 — 값을 채우면 사이트가 Supabase와 연결됩니다.
 *
 *  url       Supabase 프로젝트 주소 (Project Settings > API > Project URL), 예: https://abcd1234.supabase.co
 *  anonKey   anon public 키 (같은 화면의 "anon public").
 *            ⚠ service_role 키는 절대 여기에 넣지 마세요. anon 키는 공개되어도 되지만,
 *            그러려면 supabase/schema.sql 의 권한(RLS) 설정이 꼭 적용돼 있어야 합니다.
 *  retention 개인정보 보관 기간 안내 문구 (상담 신청에만 필요). 운영 기관이 정한 기준을 그대로 적으세요.
 *            예: '접수 후 30일이 지나면 자동으로 삭제합니다.'
 *  sheetUrl  상담 신청을 "구글시트"로 받을 때 쓰는 Apps Script 웹 앱 주소 (https://script.google.com/macros/s/…/exec).
 *            이 값이 있으면 상담 신청은 구글시트로 쌓이고(Supabase 로는 가지 않음), 비워 두면 Supabase 로 쌓입니다.
 *            만드는 방법: google-sheets/설정-안내.md
 *
 * 어떻게 동작하나요
 *  - url + anonKey          → 복지 정보(복지서비스·복지관·프로그램·행사 등)를 Supabase에서 읽어 옵니다.
 *                             읽지 못하면(설정 없음·네트워크 오류·빈 테이블) 사이트에 들어 있는 기본 내용을 그대로 씁니다.
 *  - url + anonKey + retention → 위에 더해 "상담 신청" 양식이 열리고, 신청이 consult_requests 테이블에 쌓입니다.
 *
 * 처음 연결하는 순서
 *  1) Supabase 프로젝트 생성  2) SQL Editor 에서 supabase/schema.sql 실행  3) 이어서 supabase/seed.sql 실행
 *  4) 이 파일에 url, anonKey 입력  5) 사이트를 열어 복지 정보가 보이는지 확인
 */
window.SUPABASE_CONFIG = {
  url: 'https://amvmycbsuxdbnrxzqhft.supabase.co',
  anonKey: 'sb_publishable_EWYee0Qli8cMiknj3Bit4g_rS-vVWly', // 공개용(publishable) 키 — 공개되어도 됩니다
  retention: '접수 후 30일이 지나면 자동으로 삭제합니다.',
  sheetUrl: ''   // 구글시트로 받으려면 Apps Script 웹 앱 주소를 여기에 (아래 "설정-안내.md" 참고)
};
