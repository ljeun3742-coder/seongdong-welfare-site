'use strict';

/* ---------- 데이터 (앱의 src/data.ts 기반 — 미검증 예시) ---------- */
const categories = [
  { id: 'crisis', icon: '🆘', label: '갑작스럽게 힘든 일이 있어요', short: '긴급·위기 상황' },
  { id: 'money', icon: '💰', label: '경제적인 도움이 필요해요', short: '경제 지원' },
  { id: 'food', icon: '🍚', label: '식사를 준비하기 어려워요', short: '식사·돌봄' },
  { id: 'mobility', icon: '🚶', label: '외출하거나 이동하기 어려워요', short: '이동·방문' },
  { id: 'lonely', icon: '💬', label: '외롭고 대화할 사람이 필요해요', short: '사회적 관계' },
  { id: 'center', icon: '🤝', label: '복지관을 이용해 보고 싶어요', short: '복지관 이용' },
  { id: 'unknown', icon: '❔', label: '어떤 도움을 받을 수 있는지 모르겠어요', short: '도움 알아보기' }
];

// 주의: 아래는 설명용 예시 항목이며 검증된 성동구 서비스가 아닙니다.
const SD = { sourceLabel: '성동구청(공식 사이트)', sourceUrl: 'https://www.sd.go.kr' };
const services = [
  { id: 'demo-2', name: '식사·일상생활 지원 정보 찾기', summary: '식사 준비나 일상생활에 도움이 필요한 경우 탐색할 수 있는 안내 항목입니다.', eligibility: '거주지와 개인 상황, 서비스별 조건을 확인해야 합니다.', benefit: '식사 지원 및 일상생활 지원 관련 서비스 탐색.', agency: '성동구 관련 담당 기관 확인 필요', address: '기관 주소 확인 필요', ...SD, tags: ['food', 'unknown'] },
  { id: 'demo-4', name: '사회적 관계·여가활동 정보 찾기', summary: '사람들과 만나거나 프로그램에 참여하고 싶은 분을 위한 안내 항목입니다.', eligibility: '기관·프로그램별 신청 대상과 일정 확인이 필요합니다.', benefit: '관계 형성 프로그램, 모임 및 여가활동 관련 정보 탐색.', agency: '성동구 지역 복지기관 확인 필요', address: '기관 주소 확인 필요', ...SD, tags: ['lonely', 'center', 'unknown'] },
  { id: 'demo-6', name: '성동구 복지관 이용 정보 찾기', summary: '복지관을 처음 이용하는 분을 위한 안내 항목입니다.', eligibility: '이용하려는 복지관 및 프로그램별 기준을 확인해야 합니다.', benefit: '복지관의 위치·프로그램·운영방법 등 확인.', agency: '해당 복지관 확정 필요', address: '복지관별 주소 입력 필요', ...SD, tags: ['center', 'unknown'] }
];

// 서울잇다플레이스(서울시복지재단 고립예방센터): 서울시복지재단 "찾아오시는 길" 페이지(주소·교통·업무시간)와 2026-10-27자 언론 보도(프로그램 이름, 이용 대상)로 2026-11-06 확인.
// 프로그램별 일정·참가비는 보도에 없어서 적지 않았고, 신청은 "고립예방플랫폼 똑똑"에서 확인하도록 안내합니다.
const ITDA_WHO = '이용 대상: 외로움을 느끼는 서울시민이면 누구나 이용할 수 있어요. 청년·중장년 프로그램이 따로 마련돼 있어요';
const ITDA_YOUTH = '청년 프로그램: 같이의 가치(미술 집단상담), 잇다스토리(공공예술 자화상 만들기), 함께 만드는 식탁(요리), 원데이 트립(지역 탐방), 하루설계(일상·공간 돌봄)';
const ITDA_MIDDLE = '중장년 프로그램: 알렉산더 테크닉(자세교정), 목공예교실, 수면개선 프로그램, 시네마 테라피(영화 모임), 마음페어링(담금주 만들기)';
const ITDA_COMMON = '청년·중장년 공통: 마음비움 테라피(요가·명상), 서울숲 정원산책, 나홀로 홀밥(소셜다이닝), 하트하트 앙상블(클래식 공연). 시·음악 콘서트와 연극도 차례로 열려요';
const ITDA_APPLY = '프로그램 일정과 참가비는 확인하지 못했어요. 신청과 자세한 내용은 서울시복지재단 고립예방센터의 "고립예방플랫폼 똑똑" 홈페이지에서 확인해 주세요';

// 성동구 복지관·센터 위치: 성동구청 및 기관 공식 안내(2026-11-05 확인). 운영시간·휴관일은 방문 전 전화로 확인하세요.
const FAC = { verified: true, facility: true, verifiedAt: '2026-11-05', sourceLabel: '성동구청 공식 사이트' };
const facilities = [
  { id: 'f-seongdong', name: '성동종합사회복지관', ...FAC, summary: '마장동에 있는 종합사회복지관입니다. 장애인종합복지관(02-2290-3100)과 같은 건물을 씁니다.', address: '서울 성동구 청계천로 508 (마장동)', phone: '02-2290-3150', transit: '2·5호선 왕십리역 4번 출구에서 마을버스 성동08번을 타고 "성동사회복지관·청계천박물관"에서 내립니다. 2호선 용두역 5번 출구에서는 도보 약 15분입니다.', homepage: 'https://www.linksd.net/index.php', sourceUrl: 'https://www.sd.go.kr/main/contents.do?key=1445' },
  { id: 'f-seongsu', name: '성수종합사회복지관', ...FAC, summary: '성수동에 있는 종합사회복지관입니다.', address: '서울 성동구 뚝섬로1길 43', phone: '02-2204-9900', transit: '2호선 뚝섬역 6번 출구에서 도보 3분, 분당선 서울숲역 1번 출구에서 도보 5분입니다.', homepage: 'https://www.seongsuwc.or.kr/', sourceUrl: 'https://www.sd.go.kr/main/contents.do?key=1447' },
  { id: 'f-oksu', name: '옥수종합사회복지관', ...FAC, summary: '옥수동에 있는 종합사회복지관입니다.', address: '서울 성동구 한림말길 16-5 (옥수동)', phone: '02-2282-1100', transit: '3호선 옥수역 3·4번 출구에서 도보 약 7분입니다.', homepage: 'http://www.oksoocwc.or.kr', sourceUrl: 'https://www.sd.go.kr/main/contents.do?key=1446' },
  { id: 'f-mental', name: '성동구정신건강복지센터', ...FAC, sourceLabel: '성동구 보건소 공식 안내', summary: '마음 건강이 걱정될 때 상담과 정신건강 서비스를 안내하는 센터입니다.', address: '서울 성동구 행당로 12, 성동구보건소 금호분소 3층·5층', phone: '02-2298-1080 (아동 전용 02-2298-2082)', transit: '', homepage: 'http://www.mindcare.or.kr/', sourceUrl: 'https://www.sd.go.kr/health/sub.do?key=2348' },
  { id: 'f-single', name: '성동구 1인가구지원센터', ...FAC, summary: '혼자 사는 주민을 위한 프로그램, 상담, 공유주방 등을 운영하는 센터입니다.', address: '서울 성동구 마장로39길 31, 3층 (마장동, 행복신협빌딩)', phone: '02-2281-7715 ~ 7718', hours: '평일 9:00~21:00, 토요일 9:00~18:00 (공휴일 휴관)', transit: '5호선 마장역 2번 출구에서 도보 3분입니다. 버스는 마장동주민센터 정류장에서 도보 3분입니다.', homepage: 'https://sd1in.net', sourceUrl: 'https://www.sd.go.kr/main/contents.do?key=4779' },
  { id: 'f-itda', name: '서울잇다플레이스', ...FAC, verifiedAt: '2026-11-06', sourceLabel: '서울시복지재단 공식 사이트·언론 보도(2026-10-27)', summary: '성수동에 있는 서울시복지재단 고립예방센터의 공간입니다. 외로움이나 고립을 겪는 서울시민이 소통하고 일상을 되찾도록 청년·중장년 프로그램을 운영해요. 2026년 9월에 문을 열었어요.', address: '서울 성동구 왕십리로 135, 2층 (성수동)', phone: '1670-5755 (서울시복지재단 대표번호)', hours: '평일(월~금) 오전 9시~오후 6시 (서울시복지재단 안내예요. 프로그램 시간은 따로 확인해 주세요)', transit: '2호선 뚝섬역 1번 출구에서 직진해 도보 약 5분(약 300m), 수인분당선 서울숲역 1번 출구에서 도보 약 7분입니다. 버스는 간선 121번, 지선 2014·2016·2224·2413번, 마을버스 성동13번을 타요.', homepage: '', sourceUrl: 'https://www.welfare.seoul.kr/web/contents/guide1-3-3.do' }
];
// 노인복지관: 성동구청 "노인/요양 복지시설" 공식 목록(2026-08-20 수정본)과 시립성동노인종합복지관 누리집에서 2026-11-05 확인.
// 구립(동 단위) 노인복지관은 이용 대상 외의 프로그램 안내가 구청 목록에 없어서, 확인하지 못한 내용은 "전화로 확인"이라고 적었습니다.
const SENIOR_SRC = { sourceUrl: 'https://www.sd.go.kr/main/contents.do?key=1442' };
facilities.push(
  { id: 'f-sd-senior', name: '시립성동노인종합복지관', ...FAC, ...SENIOR_SRC, summary: '마장동에 있는 시립 노인복지관입니다. 서울시에 사는 만 60세 이상 어르신이 이용할 수 있고, 상담·교육·일자리·돌봄·건강 지원을 한곳에서 해요.', address: '서울 성동구 마조로 77 (마장동)', phone: '02-2298-5117', transit: '5호선 마장역 1번·4번 출구에서 도보 1분입니다. 버스는 121번·2013번(마장역 하차), 마을버스 성동02번을 타고 마장역에서 내려요. 무료 셔틀버스(성공버스 2노선)도 마장역 4번 출구 스마트쉼터 옆에서 탈 수 있어요.', homepage: 'https://www.sdsenior.or.kr/' },
  { id: 'f-wsdoseon', name: '왕십리도선동 노인복지관', ...FAC, ...SENIOR_SRC, summary: '왕십리도선동 주민센터 3층에 있는 구립 노인복지관입니다. 성동구에 사는 만 60세 이상 어르신이 이용할 수 있어요.', address: '서울 성동구 마장로 141 (왕십리도선동 주민센터 3층)', phone: '02-6925-0456', transit: '', homepage: '' },
  { id: 'f-ws2', name: '왕십리2동 노인복지관', ...FAC, ...SENIOR_SRC, summary: '왕십리2동에 있는 구립 노인복지관입니다.', address: '서울 성동구 무학봉길 69', phone: '02-2292-0102', transit: '', homepage: 'https://www.ws2noin.or.kr/' },
  { id: 'f-sageun', name: '사근동 노인복지관', ...FAC, ...SENIOR_SRC, summary: '사근동 주민센터 2층에 있는 구립 노인복지관입니다.', address: '서울 성동구 사근동길 37 (사근동 주민센터 2층)', phone: '02-6956-0707', transit: '', homepage: '' },
  { id: 'f-sungsu12', name: '성수1가2동 노인복지관', ...FAC, ...SENIOR_SRC, summary: '성수1가2동 주민센터 6층에 있는 구립 노인복지관입니다.', address: '서울 성동구 왕십리로5길 3 (성수1가2동 주민센터 6층)', phone: '02-464-4488', transit: '', homepage: 'http://www.tnv4488.co.kr/' },
  { id: 'f-daehyun', name: '성수1가2동 노인복지관 대현분소', ...FAC, ...SENIOR_SRC, summary: '금호동 대현산배수지공원 안에 있는 성수1가2동 노인복지관의 분소입니다. 1층에는 AI로 건강을 살피는 금호 스마트헬스케어센터가 있어요.', address: '서울 성동구 금호로 172-1 (대현산배수지공원 내)', phone: '02-2282-4486', transit: '', homepage: 'http://www.tnv4488.co.kr/' },
  { id: 'f-yongdap', name: '용답동 노인복지관', ...FAC, ...SENIOR_SRC, summary: '용답동에 있는 구립 노인복지관입니다.', address: '서울 성동구 천호대로78길 42', phone: '02-2249-9288', transit: '', homepage: 'http://www.ydscenter.org/' },
  { id: 'f-songjeong', name: '송정동 노인복지관', ...FAC, ...SENIOR_SRC, summary: '송정동복합청사 2층에 있는 구립 노인복지관입니다.', address: '서울 성동구 송정18가길 9 (송정동복합청사 2층)', phone: '02-6951-1055', transit: '', homepage: '' }
);
const SENIOR_CALL = '회원 가입 방법과 월별 강좌는 전화로 확인해 주세요';
// 구에서 6개 노인복지관(왕십리도선동·왕십리2동·사근동·성수1가2동·송정동·용답동)에 운영한 프로그램 — 서울신문 보도(2026-08-20)로 확인
const GARDEN = '찾아가는 정원치유: 만 60세 이상 어르신이 식물로 비누·나만의 정원·천연염색 등을 만들어요. 올해는 8~10월에 8회 열렸고, 다음 일정은 전화로 확인해 주세요';

// 기관별 주요 사업·프로그램: 성동구청·성동구 보건소 공식 안내 페이지(위 sourceUrl)에서 2026-11-05 확인. 세부 프로그램·일정은 바뀌므로 기관에 확인하세요.
const programsById = {
  'f-sd-senior': ['시니어 종합상담', '평생교육: 디지털 교육 등 (복지관 회원이 신청)', '노인일자리: 취업 알선과 일자리 활동', '재가복지·노인맞춤돌봄서비스·사례관리', '건강증진: 경로식당, 마장스마트헬스케어센터', '성동데이케어센터(병설)'],
  'f-wsdoseon': ['어르신 여가·교류 공간 (주민센터 3층)', '찾아가는 정원치유', SENIOR_CALL],
  'f-ws2': ['어르신 여가·교류 공간', '왕십리 스마트헬스케어센터: 노쇠평가와 맞춤 운동 (1층)', '찾아가는 정원치유', SENIOR_CALL],
  'f-sageun': ['어르신 여가·교류 공간 (주민센터 2층)', '찾아가는 정원치유', '구립 사근동데이케어센터 (같은 건물)', SENIOR_CALL],
  'f-sungsu12': ['신바람 문화강좌', '찾아가는 정원치유', '서울숲데이케어센터 (같은 건물 3층)', SENIOR_CALL],
  'f-daehyun': ['금호 스마트헬스케어센터: 건강 측정과 AI 활용 맞춤 운동 (1층)', '신바람 문화강좌', SENIOR_CALL],
  'f-yongdap': ['건강·운동: 한국무용, 바르게걷기 등', '배움: 인문학 강좌, 어르신 금융 교실', '치매 예방: 성동구치매안심센터와 함께하는 "기억을 잇다"', '찾아가는 정원치유·찾아가는 경로당 프로그램', SENIOR_CALL],
  'f-songjeong': ['노년 사회화 교육·정보화 프로그램·건강특강', '치매예방 프로그램', '찾아가는 정원치유', '구립 송정동데이케어센터 (같은 건물 3층)', SENIOR_CALL],
  'f-seongdong': ['동 단위 지역밀착 사업(동중심사업)', '사례관리', '아동·청소년 결연지원, 취약계층 아동·청소년 식사지원', '무료이동목욕', '서울형 자산형성지원', '노인사회활동지원'],
  'f-seongsu': ['서비스 지원: 가족기능 강화, 지역사회보호, 어르신 사회활동 지원, 가족 상담, 아동발달지원', '사례관리 (성수희망기금 등)', '주민조직화·후원·자원봉사 등 네트워크 사업', '교육·문화: 어르신 노래교실 등 10여 강좌, 한글교실, 손뜨개, 수채화·유화, 한문서예 등'],
  'f-oksu': ['어르신: 정수데이케어센터, 옥수재가노인지원센터, 경로식당, 물리치료실', '아동·청소년·가족: 연꽃어린이집, 좋은벗방과후교실, 아이꿈누리터', '상담·치료: 전문상담실, 놀이·미술·언어치료실', '교육·여가: 컴퓨터실, 음악교실, 요리교실, 제빵실, 미용교실, 체력단련실, 북카페'],
  'f-mental': ['정신질환자 집중사례관리·재활프로그램·정신상담', '아동·청소년·청년·중장년·노인 대상 정신건강 프로그램', '조기선별검진, 정신건강 상담, 캠페인', '마음정원: 우울·불안 심리상담, 재난(사고·화재·홍수) 경험자 심리상담', '정신질환자 치료비 지원 (대상·소득 조건은 센터에 문의)'],
  'f-single': ['몸 건강: 건강밥상 요리, 요가·필라테스, 체력측정·체성분 분석, 건강교육', '마음 건강: 미술 심리상담, 컬러링, 멘토·멘티 결연', '관계 건강: 악기·예술교실, 꽃꽂이, 목공예, 홈인테리어', '재무·경제교육, 안심장비 지원', '공유주방 등 공간 대관'],
  'f-itda': [ITDA_YOUTH, ITDA_MIDDLE, ITDA_COMMON, ITDA_WHO, ITDA_APPLY]
};
facilities.forEach(f => { f.programs = programsById[f.id]; });

// 외로움·관계 관련 프로그램: 각 기관 공식 안내(2026-11-05 확인). 모집 시기·대상은 바뀔 수 있으니 전화로 확인하세요.
const lonelyPrograms = {
  'f-itda': [ITDA_WHO, ITDA_YOUTH, ITDA_MIDDLE, ITDA_COMMON, ITDA_APPLY],
  'f-single': ['관계 건강: 악기교실, 예술교실, 꽃꽂이, 목공예, 홈인테리어 같은 취미 모임에서 이웃을 만나요', '중장년 1인가구 관계망 모임: 테마문화모이장, 보물일지도', '마음 건강: 미술 심리상담, 멘토·멘티 결연으로 이야기 나눌 사람을 만나요', '글쓰기, 댄스, 한 달 챌린지 같은 주제별 모임 (모집 시기는 누리집에서 확인)'],
  'f-seongdong': ['서예모임: 성인 누구나 붓글씨와 캘리그라피를 함께 해요', '성인 원데이클래스: 11월 21일·28일 카드지갑·플랩지갑 만들기 (선착순 신청)', '한글모임: 만 60세 이상 어르신이 함께 한글을 배워요', '노인사회활동지원사업: 활동하며 사람들을 만나요 (성동노인돌보미는 독거어르신께 밑반찬 배달과 말벗을 해요)'],
  'f-seongsu': ['건강한 노후생활: 서울에 사는 만 60세 이상이 무료로 건강체조, 라인댄스, 실버요가 등을 함께 해요', '어르신 노래교실 외 10여 강좌, 손뜨개, 수채화·유화, 한문서예 같은 교육문화 강좌', '가족 상담'],
  'f-oksu': ['옥수동 이웃 사랑꾼: 옥수동 어르신들의 관계망을 넓히는 사업이에요', '경로식당, 정수데이케어센터(2층)', '요리교실, 제빵실, 음악교실, 북카페 같은 공간이 있어요 (프로그램과 대상은 전화로 확인해 주세요)'],
  'f-mental': ['마음정원: 우울·불안에 대한 심리상담 (성동구보건소 1층, 센터 5층)', '연령별 집단프로그램과 중장년·노인 우울프로그램', '조기선별검진과 정신건강 상담']
};

// 연령대별 프로그램: 각 기관 공식 안내(성동종합 누리집 방과후 어린이집·아동청소년 사업·노인사회활동지원·사회교육, 성동구청·성수·옥수·1인가구센터·정신건강복지센터 안내)에서 2026-11-05 확인.
// 대상·모집 시기는 바뀔 수 있고, 확인하지 못한 대상 연령은 "전화로 확인"이라고 적었습니다.
const agePrograms = {
  'f-itda': {
    youth: [ITDA_WHO, ITDA_YOUTH, ITDA_COMMON, ITDA_APPLY],
    middle: [ITDA_WHO, ITDA_MIDDLE, ITDA_COMMON, ITDA_APPLY]
  },
  'f-sd-senior': {
    senior: ['이용 대상: 서울시에 사는 만 60세 이상 어르신 (성동구청 안내)', '시니어 종합상담, 평생교육(디지털 교육 등은 복지관 회원이 회원증을 가지고 신청해요)', '노인일자리: 취업 알선과 일자리 활동 (성동구에 사는 만 65세 이상 모집 공지가 올라와요)', '경로식당(식단은 누리집에 매일 올라와요), 건강증진, 마장스마트헬스케어센터', '재가복지·노인맞춤돌봄서비스·사례관리, 병설 성동데이케어센터', '5호선 마장역에서 도보 1분이고, 무료 셔틀버스(성공버스 2노선)도 있어요']
  },
  'f-wsdoseon': { senior: ['이용 대상: 성동구에 사는 만 60세 이상 어르신 (성동구청 안내)', '왕십리도선동 주민센터 3층에 있어요', GARDEN, SENIOR_CALL] },
  'f-ws2': { senior: ['이용 대상: 성동구에 사는 만 60세 이상 어르신이에요. 배우자가 60세 이상 회원이면 60세 미만도 가입할 수 있다고 안내돼요 (전화로 한 번 더 확인해 주세요)', '1층 왕십리 스마트헬스케어센터: 60세 이상 성동구민이면 누구나 이용해요. 노쇠평가로 몸 상태를 살피고, 집에서 하는 운동 앱도 도와줘요', GARDEN, SENIOR_CALL] },
  'f-sageun': { senior: ['사근동 주민센터 2층에 있어요. 같은 건물에 구립 사근동데이케어센터가 있어요 (02-6956-0708)', GARDEN, SENIOR_CALL] },
  'f-sungsu12': { senior: ['신바람 문화강좌: 달마다 "이달의 강좌"가 누리집에 올라와요 (10월 강좌 게시 확인)', '건강 영양·걷기 교실 같은 구 지원 건강 프로그램을 한 적이 있어요 (2024년 운영 사례)', GARDEN, '같은 건물 3층에 서울숲데이케어센터가 있어요 (02-464-4477)', SENIOR_CALL] },
  'f-daehyun': { senior: ['1층 금호 스마트헬스케어센터: 건강측정, AI 근력운동, 그룹운동, 릴렉싱, 자율운동 공간이 있고, 운동관리사가 맞춤 운동을 알려 줘요 (이용 방법은 전화로 확인해 주세요)', '신바람 문화강좌: 학기마다 수강 신청 안내가 공지돼요', SENIOR_CALL] },
  'f-yongdap': { senior: ['이용 대상: 성동구에 사는 만 60세 이상 어르신이에요', '올해 누리집에 올라온 프로그램: 어르신 금융 교실(금융사기 예방·노후 설계), 인문학 강좌 "웃음과 소통", 찾아가는 경로당 프로그램', '치매 예방: 성동구치매안심센터와 함께하는 "기억을 잇다"와 인지상담소', '건강·운동: 한국무용, 바르게걷기 등', GARDEN, SENIOR_CALL] },
  'f-songjeong': { senior: ['이용 대상: 성동구에 사는 만 60세 이상 어르신 (2024년 구 소식 안내)', '노년 사회화 교육·정보화 프로그램·건강특강은 분기별로 신청을 받았고, 수강하려면 복지관 회원 가입이 필요했어요 (2024년 안내)', '치매예방 프로그램(10회기)도 한 적이 있어요 (2024년 안내)', GARDEN, '같은 건물 3층에 구립 송정동데이케어센터가 있어요 (02-6952-1001)', SENIOR_CALL] },
  'f-seongdong': {
    child: ['방과후 어린이집: 초등학교 1~6학년 비장애·장애아동이 대상이에요(장애아동은 통합교육이 가능한 지적·자폐성 장애 수준). 학기 중 13:00~18:00, 방학 중 09:30~17:30. 문의 02-2290-3163·3164', '결식 예방(우리함끼·가온): 끼니가 걱정되는 취약계층 초등학생과, 방학 중 아동·청소년에게 식사를 지원해요', '결연지원·드림스타트 연계: 저소득 가정 아동·청소년의 교육과 돌봄을 도와요', '네이처 나눔단: 성동구에 사는 아동·청소년 누구나 환경교육과 나눔활동에 참여해요'],
    teen: ['네이처 나눔단: 성동구에 사는 아동·청소년 누구나 환경교육과 나눔활동에 참여해요', '가온: 방학 중 끼니가 걱정되는 취약계층 아동·청소년에게 간편한 식사를 지원해요', '결연지원: 저소득 가정 아동·청소년이 교육 기회를 얻도록 후원 재단과 연결해 줘요'],
    youth: ['성인 원데이클래스: 11월 21일·28일에 카드지갑·플랩지갑 만들기를 해요(선착순 신청, 정원 12명)', '서예모임: 성인 누구나 붓글씨와 캘리그라피를 배워요'],
    middle: ['성인 원데이클래스: 11월 21일·28일에 카드지갑·플랩지갑 만들기를 해요(선착순 신청, 정원 12명)', '서예모임: 성인 누구나 붓글씨와 캘리그라피를 배워요'],
    senior: ['노인사회활동지원사업: 성동구에 사는 만 65세 이상 기초연금 수급자는 공익활동(월 30시간 이상, 11개월)에, 서울에 사는 만 65세 이상은 시설 도우미 같은 사회서비스형 활동에 참여할 수 있어요. 생계급여 수급자·장기요양 등급자 등은 참여할 수 없어요', '한글모임: 만 60세 이상 어르신이 수준별 한글, 받아쓰기, 읽기·쓰기를 배워요', '무료이동목욕사업']
  },
  'f-seongsu': {
    child: ['아동발달지원센터: 치료상담, 심리검사, 언어·놀이·미술치료 등을 해요(자세한 내용과 대상 연령은 전화로 확인해 주세요)', '유아영어발레, 유아미술 같은 교육문화 강좌'],
    senior: ['건강한 노후생활: 서울에 사는 만 60세 이상이 무료로 건강체조, 라인댄스, 실버요가, 근력운동, 줌바댄스, 트로트댄스 등을 해요(학기별 모집, 정원이 넘으면 추첨)', '교육문화 강좌: 어르신 노래교실 외 10여 강좌, 한글교실, 손뜨개, 수채화·유화, 한문서예 (강좌별 대상은 전화로 확인해 주세요)', '어르신 사회활동 지원']
  },
  'f-oksu': {
    child: ['좋은벗방과후교실: 초등학생 장애아동의 방과후 돌봄이에요. 일상생활·사회성 발달 지원과 전문 치료 지원을 해요', '아이꿈누리터: 돌봄이 필요한 아이들을 위한 돌봄서비스예요. 방학에는 방학특강과 체험활동을 해요(우리동네키움센터 성동 7호점)', '연꽃어린이집(1층), 전문상담실과 놀이·미술·언어치료실(3층)'],
    senior: ['정수데이케어센터·옥수재가노인지원센터(2층)', '경로식당과 물리치료실(2층)', '옥수동 이웃 사랑꾼: 옥수동 어르신들의 관계망을 넓히고 서로 돕는 체계를 만드는 사업이에요', '이용 대상과 신청 방법은 전화로 확인해 주세요']
  },
  'f-mental': {
    child: ['아동·청소년 집단프로그램과 학부모아카데미', '아동 전용 상담전화 02-2298-2082'],
    teen: ['아동·청소년 집단프로그램', '마음정원: 우울·불안 심리상담 (성동구보건소 1층, 센터 5층)'],
    youth: ['청년 집단프로그램', '마음정원: 우울·불안 심리상담', '조기선별검진과 정신건강 상담'],
    middle: ['중장년 우울프로그램', '마음정원: 우울·불안 심리상담', '조기선별검진과 정신건강 상담'],
    senior: ['노인 우울프로그램', '마음정원: 우울·불안 심리상담', '조기선별검진과 정신건강 상담']
  },
  'f-single': {
    youth: ['혼자 사는 1인 가구를 위한 센터예요', '몸 건강(건강밥상 요리, 요가·필라테스, 체력측정), 마음 건강(미술 심리상담), 관계 건강(악기·예술교실, 꽃꽂이, 목공예)', '글쓰기, K팝 댄스, 한 달 챌린지 같은 주제별 모임(모집 시기는 누리집에서 확인)', '재무·경제교육, 안심장비 지원'],
    middle: ['혼자 사는 1인 가구를 위한 센터예요', '중장년 1인가구 관계망 모임: 테마문화모이장, 보물일지도 등', '글쓰기 프로그램(오늘의 목격자 중장년반) 등 주제별 모임(모집 시기는 누리집에서 확인)', '몸 건강(건강밥상 요리, 요가·필라테스), 마음 건강(미술 심리상담), 재무·경제교육']
  }
};

// 분류를 더 늘리지 않고, 전체 복지서비스는 서울복지포털로 안내합니다.
const seoulPortalLink = () => el('a', { class: 'choice secondary', href: 'https://wis.seoul.go.kr/', target: '_blank', rel: 'noopener noreferrer' }, '🔎  서울복지포털에서 더 찾아보기 ↗');
const mapUrl = addr => 'https://map.naver.com/p/search/' + encodeURIComponent(addr.replace(/\s*\(.*$/, '').replace(/,.*$/, ''));
const facilityCard = f => el('button', { type: 'button', class: 'card', onclick: () => go('detail', { detail: f }) },
  el('h3', {}, f.name), el('p', { style: 'margin:0 0 4px' }, '📍 ' + f.address), small('☎ ' + f.phone),
  f.programs && el('p', { class: 'small' }, '주요 사업: ' + f.programs.filter(p => !/확인해 주세요$/.test(p)).slice(0, 3).map(p => p.split(':')[0]).join(' · ') + ' 등'),
  el('span', { class: 'more' }, '자세히 보기  ›'));

// 욕구 선택(질문 1) 뒤에 이어지는 구체 질문 2개 → 전체 질문 과정은 총 3회
const T = (head, rows) => ({ head, rows });
const HH = ['1인', '2인', '3인', '4인', '5인', '6인'];
const WON = n => n.toLocaleString('ko-KR') + '원';
const MOHW_BASE = 'https://www.mohw.go.kr/menu.es?mid=a10708010300';
const MOHW_NEWS = 'https://www.mohw.go.kr/board.es?mid=a10503000000&bid=0027&act=view&list_no=1487098';
const COMMON = { agency: '거주지 읍·면·동 주민센터 (문의: 보건복지상담센터 129)', phone: '129', address: '주민등록 주소지의 읍·면·동 주민센터', verified: true, verifiedAt: '2026-11-05', sourceLabel: '보건복지부 (2026년 기준)' };
// 아래 5개 항목은 보건복지부 공식 자료(2026년 기준)로 확인한 수치입니다. 매년 바뀌므로 신청 전 복지로·주민센터에서 다시 확인하세요.
const verifiedServices = [
  { id: 'v-livelihood', name: '생계급여', ...COMMON, sourceUrl: MOHW_BASE, tags: ['money', 'unknown'],
    summary: '소득이 기준 이하인 가구의 생활비를 보충해 주는 기초생활보장 급여입니다.',
    eligibility: '가구의 월 소득인정액이 기준 중위소득의 32% 이하여야 합니다. 부양의무자 기준이 함께 확인될 수 있습니다.',
    table: T(['가구원 수', '월 소득인정액 기준 (중위소득 32%)'], [['1인', 820556], ['2인', 1343773], ['3인', 1714892], ['4인', 2078316], ['5인', 2418150], ['6인', 2737905]].map(([a, b]) => [a, WON(b)])),
    benefit: '월 지급액 = 가구원 수별 선정기준액 − 가구의 소득인정액. 소득인정액이 0원이면 1인 가구는 월 820,556원, 4인 가구는 월 2,078,316원을 받습니다. (소득인정액 = 소득평가액 + 재산의 소득환산액)' },
  { id: 'v-medical', name: '의료급여', ...COMMON, sourceUrl: MOHW_NEWS, tags: ['money', 'unknown'],
    summary: '소득과 재산이 적은 가구의 병원비 부담을 덜어 주는 기초생활보장 급여입니다.',
    eligibility: '가구의 월 소득인정액이 기준 중위소득의 40% 이하여야 합니다. 부양의무자 기준과 특례가 적용될 수 있어 주민센터 확인이 필요합니다.',
    table: T(['가구원 수', '월 소득인정액 기준 (중위소득 40%)'], [['1인', 1025695], ['2인', 1679717], ['3인', 2143614], ['4인', 2597895], ['5인', 3022688], ['6인', 3422381]].map(([a, b]) => [a, WON(b)])),
    benefit: '급여 대상 항목 의료비 중 수급자 본인부담금을 제외한 전액을 지원합니다. 연간 외래진료가 365회를 초과하면 초과분에 본인부담률 30%가 적용됩니다(산정특례자, 중증장애인, 아동, 임산부 등은 제외).' },
  { id: 'v-housing', name: '주거급여', ...COMMON, sourceUrl: MOHW_NEWS, tags: ['money', 'unknown'],
    summary: '소득이 기준 이하인 가구의 임차료 또는 주거 환경 부담을 덜어 주는 기초생활보장 급여입니다.',
    eligibility: '가구의 월 소득인정액이 기준 중위소득의 48% 이하여야 합니다. 부양의무자 기준은 없습니다.',
    table: T(['가구원 수', '월 소득인정액 기준 (중위소득 48%)', '임차가구 기준임대료 (서울·1급지)'], [['1인', 1230834, '36.9만원'], ['2인', 2015660, '41.4만원'], ['3인', 2572337, '49.2만원'], ['4인', 3117474, '57.1만원'], ['5인', 3627225, '59.1만원'], ['6인', 4106857, '69.9만원']].map(([a, b, c]) => [a, WON(b), c])),
    benefit: '임차료를 지원하는 임차가구 급여의 기준임대료는 지역(급지)과 가구원 수에 따라 다르며, 성동구가 속한 서울(1급지)은 위 표와 같습니다(월 기준). 실제 지급액은 가구의 소득과 임차료 등에 따라 달라질 수 있으니 주민센터에서 확인하세요. 자가 가구 지원은 공식 안내를 확인해야 합니다.' },
  { id: 'v-education', name: '교육급여', ...COMMON, sourceUrl: MOHW_NEWS, tags: ['money', 'unknown'],
    summary: '소득이 기준 이하인 가구의 초·중·고 학생 교육비를 지원하는 기초생활보장 급여입니다.',
    eligibility: '가구의 월 소득인정액이 기준 중위소득의 50% 이하여야 합니다. 부양의무자 기준은 없습니다.',
    table: T(['가구원 수', '월 소득인정액 기준 (중위소득 50%)'], [['1인', 1282119], ['2인', 2099646], ['3인', 2679518], ['4인', 3247369], ['5인', 3778360], ['6인', 4277976]].map(([a, b]) => [a, WON(b)])),
    benefit: '2026년 교육활동지원비(연): 초등학생 502,000원, 중학생 699,000원, 고등학생 860,000원. 무상교육 대상이 아닌 고등학교는 입학금, 수업료, 교과서비를 실비로 지원합니다.' },
  { id: 'v-pension', name: '기초연금', agency: '국민연금공단 지사 또는 거주지 읍·면·동 주민센터 (문의: 보건복지상담센터 129)', phone: '129', address: '주민등록 주소지의 읍·면·동 주민센터', verified: true, verifiedAt: '2026-11-05', sourceLabel: '보건복지부 보도자료 (2026년 기준)', sourceUrl: 'https://www.mohw.go.kr/board.es?act=view&bid=0027&list_no=1488478&mid=a10503000000', tags: ['money', 'lonely', 'unknown'],
    summary: '어르신의 노후 생활 안정을 돕기 위해 매달 지급하는 연금입니다.',
    eligibility: '만 65세 이상이면서 가구의 월 소득인정액이 선정기준액 이하여야 합니다. 그 밖의 요건은 공식 안내에서 확인하세요.',
    table: T(['가구 형태', '월 소득인정액 선정기준액 (2026)'], [['노인 단독가구', WON(2470000)], ['노인 부부가구', WON(3952000)]]),
    benefit: '2026년 기준연금액(월 최대): 노인 단독 349,700원, 노인 부부 559,520원(1인당 최대 279,760원). 소득·재산 등에 따라 실제 지급액은 줄어들 수 있습니다.' }
];
// 긴급복지지원: 보건복지부·복지로 공식 안내(2026-11-05 확인). 지원 금액·기준은 매년 바뀌므로 표기하지 않고 129에서 확인하도록 안내합니다.
verifiedServices.unshift({ id: 'v-emergency', name: '긴급복지지원', ...COMMON, sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10708010100', tags: ['crisis', 'money', 'unknown'],
  summary: '갑작스러운 위기 상황으로 생계를 유지하기 어려운 가구에 생계·의료·주거 등을 일시적으로 신속하게 지원하는 제도입니다.',
  eligibility: '주소득자의 사망·가출·실직 등으로 소득을 잃은 경우, 중한 질병이나 부상을 당한 경우, 방임·학대·가정폭력·성폭력을 당한 경우, 화재 등으로 집에서 생활하기 어려운 경우, 단전 등 공급이 중단된 경우 등이 해당할 수 있습니다. 소득·재산 기준이 함께 확인됩니다.',
  benefit: '생계지원, 의료지원(의료비·약제비), 주거지원(임시 거소 제공 또는 비용 지원) 등을 받을 수 있습니다. 먼저 지원한 뒤 나중에 조사하는 방식이라 요건에 맞지 않으면 환수될 수 있습니다. 지원 금액과 기간은 매년 바뀌므로 129에서 확인하세요. 의료지원은 퇴원 3일 전까지 요청해야 합니다.' });

// 서울시 병원 안심동행서비스: 서울시 정책 안내(2026-11-05 확인). 이용 한도·요금은 바뀔 수 있으니 신청 전 1533-1179에서 확인하세요.
const HOSPITAL_ESCORT = {
  id: 'v-hospital', name: '서울시 병원 안심동행서비스', verified: true, verifiedAt: '2026-11-05', tags: ['mobility', 'unknown'],
  sourceLabel: '서울특별시 정책 안내', sourceUrl: 'https://www.seoul.go.kr/policy/view.do?id=65&lan=KO',
  applyUrl: 'https://1in.seoul.go.kr/front/bsns/bsnsView.do?bsns_id=db21d1b47dba4adbbaed4b3e7d4219e7',
  agency: '서울시 (신청·이용 문의: 1533-1179, 서울시 대표전화 다산콜센터 02-120)', phone: '1533-1179',
  address: '서울시 1인가구포털(1in.seoul.go.kr) 또는 전화로 신청', noBokjiro: true, eligLabel: '지원 대상', benefitLabel: '지원 내용',
  note: '서울시 공식 정책 안내로 확인한 내용입니다(2026년 11월 5일 확인). 이용 한도와 요금은 바뀔 수 있어요. 이 사이트는 이용 자격을 판정하지 않습니다.',
  summary: '혼자 병원에 가기 어려운 분께 병원 오가는 길과 접수·수납, 진료, 약 받는 일까지 함께해 주는 서울시 복지서비스입니다.',
  eligibility: '주민등록상 주소지가 서울시이거나, 서울시에 실제 거주하는 시민입니다. 1인가구만 이용하던 서비스가 2023년부터 모든 시민으로 넓어졌습니다.',
  benefit: '병원 출발과 귀가 동행, 병원 접수·수납 지원, 진료 동행, 약 받기 등을 도와줍니다. 이용 한도는 월 최대 10회, 연간 200시간입니다. 이용 요금은 시간당 5,000원이며, 기준 중위소득 100% 이하는 연 48회 한도 안에서 무료입니다. 운영 시간은 평일 오전 7시~오후 8시이고, 주말은 미리 예약한 건에 한해 지원합니다. 신청은 서울시 1인가구포털 또는 전화 1533-1179로 합니다. 같은 날 취소나 현장 취소를 반복하면 수수료가 붙거나 이용이 일정 기간 제한될 수 있습니다.'
};
// 성동구 성공버스: 성동구청 공식 안내(key=5108, 페이지 최종수정 2026-03-10, 2026-11-05 확인). 노선·시간표는 바뀔 수 있습니다(1노선은 2025-11-03 변경).
const SEONGGONG_BUS = {
  id: 'v-seonggong-bus', name: '성동구 성공버스 (무료 공공시설 셔틀)', verified: true, verifiedAt: '2026-11-05', tags: ['mobility', 'unknown'],
  sourceLabel: '성동구청 공식 사이트', sourceUrl: 'https://www.sd.go.kr/main/contents.do?key=5108',
  agency: '성동구 교통행정과', phone: '02-2286-5679', address: '정류장은 "성공버스" 앱과 정류장 표지판에서 확인 (4개 노선 모두 성동구청·왕십리역에서 갈아탈 수 있어요)',
  noBokjiro: true, eligLabel: '이용 대상', benefitLabel: '이용 방법', tableAfterBenefit: true,
  note: '성동구청 공식 안내로 확인한 내용입니다(2026년 11월 5일 확인). 노선과 시간표는 바뀔 수 있어요. 정류장별 도착 시각은 정류장 표지판이나 성공버스 앱에서 확인해 주세요.',
  summary: '성동구청, 주민센터, 도서관, 보건소, 성동50플러스센터, 노인복지관 같은 공공시설을 무료로 순환하는 셔틀버스입니다. 복지관이나 외부활동을 하러 갈 때 이용해 보세요.',
  eligibility: '성동구 공공시설 이용자와 교통약자(장애인, 고령자, 임산부, 영유아 동반자, 어린이 등)입니다. 성동구민이 아니어도 이용할 수 있습니다.',
  table: T(['노선', '다니는 곳', '배차 간격', '운행 시간 (종점 도착 기준)'], [
    ['1노선 (파랑)', '성수–성동구청–응봉–신금호', '17분', '07:30~19:38'],
    ['2노선 (분홍)', '용답–마장–사근–성동구청–상왕십리–보건소', '20분', '07:20~19:20'],
    ['3노선 (노랑)', '송정–성동구청', '50분', '08:00~19:25'],
    ['4노선 (보라)', '성동구청–옥수', '60분', '08:00~19:45']]),
  benefit: '요금은 무료이고, 운행 시간 안에는 횟수 제한이 없습니다. 월~금요일에만 운행하며 토·일요일과 공휴일에는 쉽니다. 타는 방법은 ① 스마트폰에 "성공버스" 앱을 설치하고 ② 앱에서 탑승권(QR코드)을 받은 뒤 ③ 탈 때 승차단말기에 QR코드를 대면 됩니다. 앱·홈페이지 이용이 어려운 만 65세 이상은 신분증을 가져가면 되고, 만 13세 미만 어린이는 신분증 없이 탈 수 있습니다. 성동종합·성수·옥수종합사회복지관은 정류장 안내에 이름이 나오지 않으니, 가까운 정류장은 앱이나 공식 안내에서 확인해 주세요. 문의는 성동구 교통행정과 02-2286-5679입니다.'
};
verifiedServices.push(HOSPITAL_ESCORT, SEONGGONG_BUS);

// 나이별 정보용 항목 (2026-11-05 공식 자료 확인). 금액·기준은 해마다 바뀌므로 신청 전 담당 기관에서 다시 확인하세요.
const AGE_NOTE = '2026년 11월 5일 기준 공식 자료로 확인한 내용입니다. 금액과 기준은 해마다 바뀌고, 실제 대상 여부는 담당 기관이 확인합니다. 이 사이트는 자격을 판정하지 않습니다.';
const AGE = { tags: ['age'], note: AGE_NOTE, eligLabel: '지원 대상', benefitLabel: '지원 내용' };
verifiedServices.push(
  { id: 'v-parent', name: '부모급여', ...COMMON, ...AGE, sourceLabel: '정책브리핑 (보건복지부, 2026년 기준)', sourceUrl: 'https://www.korea.kr/multi/visualNewsView.do?newsId=148957936',
    summary: '아이가 태어난 뒤 만 2세가 되기 전까지 매달 현금으로 지원하는 급여입니다.',
    eligibility: '만 2세 미만(0~23개월) 아동을 키우는 가정입니다.',
    benefit: '0세는 월 100만 원, 1세는 월 50만 원입니다. 어린이집을 이용하면 보육료를 뺀 차액을 현금으로 받습니다. 가정에서 키우는 경우 현금은 매월 25일에 지급됩니다. 신청은 복지로나 주민센터에서 합니다.' },
  { id: 'v-childallow', name: '아동수당', ...COMMON, ...AGE, sourceLabel: '보건복지부 (2026년 기준)', sourceUrl: 'https://www.mohw.go.kr/menu.es?mid=a10711030100',
    summary: '아이를 키우는 가정에 매달 현금으로 지급하는 수당입니다.',
    eligibility: '만 9세 미만 모든 아동입니다(2026년). 소득·재산 기준이 없습니다. 지급 연령은 2027년 10세 미만, 2028년 11세 미만, 2029년 12세 미만, 2030년 13세 미만으로 단계적으로 높아집니다.',
    benefit: '수도권(성동구 포함)은 아동 1인당 월 10만 원입니다. 한 번 신청하면 만 9세 생일이 속한 달의 전달까지 다시 신청하지 않아도 이어집니다. 아직 받은 적이 없다면 복지로나 주민센터에서 새로 신청하세요.' },
  { id: 'v-dream', name: '학교 밖 청소년 지원 (꿈드림)', agency: '성동구 학교밖청소년지원센터 꿈드림 (문의: 청소년전화 1388)', phone: '1388', address: '가까운 꿈드림센터는 청소년 1388 누리집에서 찾을 수 있어요', verified: true, verifiedAt: '2026-11-05', ...AGE,
    sourceLabel: '생활법령정보 · 정책브리핑', sourceUrl: 'https://www.easylaw.go.kr/CSP/CnpClsMain.laf?csmSeq=746&ccfNo=7&cciNo=1&cnpClsNo=1', noBokjiro: true,
    summary: '학교를 다니지 않는 청소년이 상담, 공부, 진로, 자립을 도움받을 수 있는 센터입니다.',
    eligibility: '9~24세 학교 밖 청소년입니다. 입학 후 3개월 이상 결석했거나, 자퇴·제적·퇴학한 청소년, 상급학교에 진학하지 않은 청소년 등이 해당합니다. 소득 기준이 없고 프로그램은 무료입니다.',
    benefit: '심리·진로·가족 상담, 재입학·대안학교·검정고시 정보, 직업체험과 취업 지원, 자립 지원, 건강검진을 받을 수 있습니다. 홈페이지 온라인 신청이나 센터 방문으로 신청합니다.' },
  { id: 'v-youthrent', name: '청년월세 지원', ...COMMON, ...AGE, sourceLabel: '복지로 공지 (2026년 기준)', sourceUrl: 'https://blog.bokjiro.go.kr/1828',
    summary: '부모와 따로 사는 무주택 청년의 월세 부담을 덜어 주는 지원입니다.',
    eligibility: '19~34세로 부모와 따로 사는 무주택 청년입니다. 소득은 원가구 기준 중위소득 100% 이하, 청년가구 기준 중위소득 60% 이하여야 합니다.',
    benefit: '월 최대 20만 원씩 최대 24개월(평생 1회) 지원합니다. 실제로 내는 월세만 지원하고 보증금과 관리비는 제외합니다. 2026년 신규 신청 기간은 3월 30일~5월 29일로 안내되었으니, 지금 신청할 수 있는지는 복지로나 129에서 확인하세요.' },
  { id: 'v-jobsupport', name: '국민취업지원제도', agency: '고용24 또는 가까운 고용센터 (성동구는 성동광진고용복지플러스센터)', phone: '1350', address: '고용24 누리집 또는 가까운 고용센터', verified: true, verifiedAt: '2026-11-05', ...AGE,
    sourceLabel: '고용노동부 고용24', sourceUrl: 'https://www.work24.go.kr', noBokjiro: true,
    summary: '일자리를 찾는 분께 취업 상담, 직업훈련, 일자리 연결과 생활 지원을 함께 해 주는 제도입니다.',
    eligibility: '만 15~69세 구직자입니다. 만 15~34세 청년은 취업 경험이 없어도 청년 특례로 신청할 수 있습니다. 유형별로 소득·재산 조건이 달라서 고용24에서 확인해야 합니다.',
    benefit: '취업 상담과 직업훈련 연계, 일자리 알선을 받고, 유형에 따라 구직촉진수당이나 취업활동비용을 받을 수 있습니다. 금액은 해마다 바뀌니 고용24에서 확인하세요.' },
  { id: 'v-50plus', name: '성동50플러스센터', agency: '성동50플러스센터 (서울시 50플러스재단)', phone: '센터 누리집(50plus.or.kr)에서 확인', address: '서울 성동구 왕십리로 241, 서울숲더샵 3층', verified: true, verifiedAt: '2026-11-05', ...AGE,
    sourceLabel: '서울시 보도 · 서울시 50플러스포털', sourceUrl: 'https://www.50plus.or.kr', noBokjiro: true,
    summary: '중장년이 노후를 준비하고 새로운 일과 배움을 찾을 수 있도록 돕는 서울시 센터입니다.',
    eligibility: '서울에 사는 중장년이 대상입니다. 프로그램마다 대상 연령이 달라서(대체로 40대 후반~60대, 취업훈련은 40~64세) 공고에서 확인해야 합니다.',
    benefit: '노후 설계, 직업교육, 일자리 연결, 동아리 활동 등을 합니다. 교육은 센터 누리집에 로그인한 뒤 프로그램 신청 메뉴에서 접수하며, 정원이 차면 마감됩니다.' },
  { id: 'v-carecare', name: '노인맞춤돌봄서비스', ...COMMON, ...AGE, tags: ['age', 'mobility'], sourceLabel: '생활법령정보 · 보건복지부 사업안내(2026)', sourceUrl: 'https://m.easylaw.go.kr/MOB/CsmInfoRetrieve.laf?csmSeq=1963&ccfNo=2&cciNo=1&cnpClsNo=1',
    summary: '혼자 지내시기 어려운 어르신께 안부 확인, 생활 안전, 말벗, 외출 동행, 가사 지원을 해 주는 서비스입니다.',
    eligibility: '만 65세 이상 기초생활수급자, 차상위계층, 기초연금 수급자 중 돌봄이 필요한 어르신입니다. 노인장기요양 서비스 이용자 등 비슷한 사업 이용자는 제외됩니다. 65세가 되었다고 자동으로 선정되지는 않고, 소득과 돌봄 필요도를 조사합니다.',
    benefit: '돌봄 필요도에 따라 월 이용 시간과 서비스가 달라집니다. 우울·고독 위험이 큰 어르신께는 사례관리도 해 줍니다. 신청은 주소지 주민센터나 복지로에서 하며, 본인·가족·이웃도 신청할 수 있습니다.' }
);

// 나이별 정보: 연령대 → 관련 지원(verifiedServices의 id)과 성동구 기관(facilities의 id)
const ageGroups = [
  { id: 'child', icon: '🧒', label: '영유아·어린이', range: '0~12세', services: ['v-parent', 'v-childallow', 'v-education'], facs: ['f-oksu', 'f-seongsu', 'f-seongdong', 'f-mental'],
    note: '아이를 키우는 보호자께 도움이 되는 정보예요.' },
  { id: 'teen', icon: '🎒', label: '청소년', range: '13~18세', services: ['v-dream', 'v-education'], facs: ['f-seongdong', 'f-mental'],
    note: '혼자 고민하기 어렵다면 청소년전화 1388(24시간)에 연락할 수 있어요.', tel: ['1388', '청소년전화'] },
  { id: 'youth', icon: '🧑', label: '청년', range: '19~39세', services: ['v-youthrent', 'v-jobsupport'], facs: ['f-itda', 'f-single', 'f-seongdong', 'f-mental'],
    note: '제도마다 "청년" 기준 나이가 달라서, 항목마다 대상 나이를 꼭 확인해 주세요.' },
  { id: 'middle', icon: '🧑‍🦱', label: '중장년', range: '40~64세', services: ['v-50plus', 'v-jobsupport'], facs: ['f-itda', 'f-single', 'f-seongdong', 'f-mental'],
    note: '일자리, 배움, 마음 건강, 혼자 사는 분을 위한 정보예요.' },
  { id: 'senior', icon: '🧓', label: '어르신', range: '65세 이상', services: ['v-pension', 'v-carecare'], facs: ['f-sd-senior', 'f-wsdoseon', 'f-ws2', 'f-sageun', 'f-sungsu12', 'f-daehyun', 'f-yongdap', 'f-songjeong', 'f-seongdong', 'f-seongsu', 'f-oksu', 'f-mental'],
    note: '노인복지관과 복지관의 어르신 프로그램, 국가 지원을 함께 모았어요.' }
];

const questions = {
  crisis: [{ prompt: '어떤 일이 있으셨나요? 가장 가까운 것을 골라 주세요.', choices: ['일자리나 소득이 갑자기 끊겼어요', '크게 아프거나 다쳤어요', '가족 문제나 폭력으로 힘들어요', '화재 등으로 집에서 지내기 어려워요', '마음이 너무 힘들어요'] }],
  money: [{ prompt: '어떤 경제적 어려움이 가장 크신가요?', choices: ['생활비가 부족해요', '주거비가 부담돼요', '어떤 지원이 있는지 궁금해요'] }],
  food: [{ prompt: '어떤 점이 가장 불편하신가요?', choices: ['식사를 준비하기 어려워요', '청소나 집안일이 어려워요', '둘 다 어려워요'] }],
  mobility: [{ prompt: '언제 이동이 가장 어려우신가요?', choices: ['병원에 갈 때', '복지관이나 외부활동을 할 때', '외출 자체가 어려워요'] }],
  lonely: [{ prompt: '어떤 활동이 가장 편하실까요?', choices: ['소규모 모임에 참여하고 싶어요', '새로운 취미를 배우며 친해지고 싶어요', '누군가와 이야기하고 싶어요', '혼자서 쉬고 싶어요'] }],
  center: [{ prompt: '복지관에서 무엇이 가장 궁금하세요?', choices: ['어디에 있는지', '어떤 프로그램이 있는지', '처음 이용하는 방법'] }],
  unknown: [{ prompt: '요즘 가장 신경 쓰이는 일은 무엇인가요?', choices: ['생활비', '집안일이나 이동', '외로움이나 관계', '아직 잘 모르겠어요'] }, { prompt: '어떤 방식으로 도움을 알아볼까요?', choices: ['관련 서비스 모두 보기', '복지관 정보 보기', '국가 복지제도 알아보기'] }]
};

// 키워드 → 관련 분야 (규칙 기반 참고 순서. AI·자격 판정 아님)
const keywordMap = [
  { word: '주거비', tags: ['money'] }, { word: '집안일', tags: ['food'] },
  { word: '병원', tags: ['mobility'] }, { word: '외출', tags: ['mobility'] },
  { word: '모임', tags: ['lonely', 'center'] }, { word: '복지관', tags: ['center', 'lonely'] },
  { word: '소득이 갑자기', tags: ['crisis', 'money'] }, { word: '아프거나 다쳤', tags: ['crisis'] },
  { word: '폭력', tags: ['crisis'] }, { word: '화재', tags: ['crisis'] }, { word: '마음이', tags: ['crisis'] },
  { word: '생활비', tags: ['money'] }, { word: '외로움', tags: ['lonely'] }
];

/* ---------- 상태 ---------- */
const state = { screen: 'home', group: 'daily', category: 'unknown', step: 0, answers: [], detail: null, age: null, busStop: null };
const history = []; // 이전 화면 스택

const $main = document.getElementById('main');
const $banner = document.getElementById('demoBanner');
const $bottom = document.getElementById('bottomNav');

/* ---------- DOM 헬퍼 ---------- */
function el(tag, props = {}, ...kids) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(props)) {
    if (k === 'class') n.className = v;
    else if (k === 'onclick') n.addEventListener('click', v);
    else n.setAttribute(k, v);
  }
  for (const kid of kids.flat()) if (kid != null) n.append(kid.nodeType ? kid : document.createTextNode(kid));
  return n;
}
const btn = (label, onClick, secondary = false) => el('button', { type: 'button', class: 'choice' + (secondary ? ' secondary' : ''), onclick: onClick }, label);
// 긴급(SOS) 아이콘: 이모지(🆘) 대신 직접 그린 SVG 배지. 글자 크기(em)를 따라 커지고 작아집니다.
function sosIcon() {
  const s = document.createElement('span');
  s.className = 'sos-icon';
  s.setAttribute('aria-hidden', 'true');
  s.innerHTML =
    '<svg viewBox="0 0 48 48" focusable="false">' +
    '<circle cx="24" cy="24" r="22" fill="#D64B3C"/>' +
    '<circle cx="24" cy="24" r="22" fill="none" stroke="#fff" stroke-width="2.5"/>' +
    '<circle cx="24" cy="24" r="17.5" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1.5"/>' +
    '<text x="24" y="30" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="17" letter-spacing="-.5" fill="#fff">SOS</text>' +
    '</svg>';
  return s;
}
const categoryLabel = c => c.id === 'crisis' ? [sosIcon(), '  ' + c.label] : `${c.icon}  ${c.label}`;
const bubble = text =>el('div', { class: 'bubble' }, text);
const small = (text, extra = '') => el('p', { class: 'small ' + extra }, text);
const catById = id => categories.find(c => c.id === id);

/* ---------- 이동 ---------- */
function go(screen, patch = {}) {
  history.push({ ...state, answers: [...state.answers] });
  Object.assign(state, patch, { screen });
  render();
}
function back() {
  const prev = history.pop();
  if (!prev) return reset();
  Object.assign(state, prev);
  render();
}
function reset() {
  history.length = 0;
  Object.assign(state, { screen: 'home', step: 0, answers: [], detail: null, busStop: null });
  render();
}

/* ---------- 추천 (참고 순서) ---------- */
function rankServices() {
  const text = state.answers.join(' ');
  const related = keywordMap.filter(m => text.includes(m.word)).flatMap(m => m.tags);
  return [...verifiedServices, ...services]
    .map(s => ({ s, score: (s.tags.includes(state.category) ? 10 : 0) + related.reduce((n, t) => n + (s.tags.includes(t) ? 3 : 0), 0) }))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map(x => x.s);
}

/* ---------- 행사 캘린더 ---------- */
// 일정을 추가하려면 events 배열에 항목을 넣으세요. type: 'festival'(마을 축제·구 행사) | 'center'(복지관 소식)
// start/end는 'YYYY-MM-DD' (하루 행사는 end 생략). 공식 출처(sourceUrl)를 확인한 일정만 넣고, verifiedAt에 확인한 날짜를 적습니다.
const SDN = 'https://www.sd.go.kr/main/selectBbsNttView.do';
const events = [
  { id: 'e-seongdong-eoulim', type: 'festival', title: '2026 주민자치 어울림 한마당', start: '2026-11-04', place: '성동구청 3층 대강당·로비',
    summary: '17개 동 대표 팀이 난타, 풍물, 라인댄스, 합창 공연을 하고 자치회관 강좌 수강생들의 작품을 전시합니다.',
    sourceLabel: '국제뉴스 보도', sourceUrl: 'https://www.gukjenews.com/news/articleView.html?idxno=3739231', verifiedAt: '2026-11-05' },
  { id: 'e-songjeong', type: 'festival', title: '제9회 송정마을 단풍길 가을 음악회', start: '2026-11-07', time: '낮 12시~저녁 8시 (개회식 오후 2시)', place: '송정제방길 (송정체육공원 근처)',
    summary: '송정마을 단풍길에서 열리는 가을 음악회입니다.',
    sourceLabel: '성동구청 공지', sourceUrl: SDN + '?bbsNo=183&nttNo=362810&key=1472', verifiedAt: '2026-11-05' },
  { id: 'e-jobfair', type: 'festival', title: '2026 성동구 일자리박람회', start: '2026-11-13', time: '오후 2시~5시', place: '성동구청 3층 대강당',
    summary: '현장채용면접, 취업지원, 부대행사, 취업특강이 열립니다. 성동구와 성동광진고용복지플러스센터가 함께 엽니다.',
    sourceLabel: '성동구청 보도자료', sourceUrl: SDN + '?bbsNo=188&nttNo=362774&key=1477', verifiedAt: '2026-11-05' },
  // 성동종합사회복지관 11월 원데이클래스: 수업 날짜는 공지에 있으나 접수 시작일·마감일은 공지에 없음(선착순, 11/4 게시)
  ...[
    { id: 'e-sdwc-card', start: '2026-11-21', time: '12:00~14:00', title: '성동종합복지관 성인 원데이클래스 — 카드지갑 만들기', summary: '복지관 5층 프로그램실에서 하는 성인 대상 공간개방사업 강좌입니다. 정원 12명.', form: 'https://forms.gle/wJa5Yg3so5NG9bqP6', wr: 148 },
    { id: 'e-sdwc-flap', start: '2026-11-28', time: '12:00~14:00', title: '성동종합복지관 성인 원데이클래스 — 플랩지갑 만들기', summary: '복지관 5층 프로그램실에서 하는 성인 대상 공간개방사업 강좌입니다. 정원 12명.', form: 'https://forms.gle/wJa5Yg3so5NG9bqP6', wr: 148 },
    { id: 'e-sdwc-tira', start: '2026-11-21', time: '11:00~13:00', title: '성동종합복지관 아이&부모 원데이클래스 — 티라미슈 케이크 만들기', summary: '아동과 보호자가 2인 1조로 참여합니다. 복지관 5층 프로그램실, 12팀 모집.', form: 'https://forms.gle/kE2AcNMkcCYUTQCi7', wr: 149 },
    { id: 'e-sdwc-kitty', start: '2026-11-28', time: '11:00~13:00', title: '성동종합복지관 아이&부모 원데이클래스 — 키티설기 만들기', summary: '아동과 보호자가 2인 1조로 참여합니다. 복지관 5층 프로그램실, 12팀 모집.', form: 'https://forms.gle/kE2AcNMkcCYUTQCi7', wr: 149 }
  ].map(x => ({
    id: x.id, type: 'center', title: x.title, start: x.start, time: x.time, place: '성동종합사회복지관 5층 프로그램실 (청계천로 508)', summary: x.summary,
    apply: '선착순 온라인 신청(구글 폼) · 정원이 차면 마감 · 접수 시작일과 마감일은 공지에 없어요. 월 1회·연 4회까지, 두 강좌 동시 신청은 안 돼요. 참가비는 공지에 없으니 02-2290-3152로 문의하세요.',
    applyUrl: x.form, sourceLabel: '성동종합사회복지관 프로그램 모집 공지(11/4 게시)', sourceUrl: `https://www.linksd.net/bbs/board.php?bo_table=0201&wr_id=${x.wr}`, verifiedAt: '2026-11-05'
  }))
];

// 복지관별 수강신청·모집 안내: 각 기관 공개 공지 기준(2026-11-05 확인). 접수 일정이 공개되지 않은 곳은 전화 문의를 안내합니다.
const applyGuide = [
  { name: '성동종합사회복지관', text: '프로그램마다 모집 글이 올라오고, 11월 원데이클래스는 온라인 신청 폼으로 선착순 접수합니다. 접수 시작일·마감일은 공지에 적혀 있지 않아요.', phone: '02-2290-3150 (원데이클래스 문의 02-2290-3152)' },
  { name: '성수종합사회복지관', text: '프로그램마다 모집 시기가 달라 확인된 수강신청 날짜는 없어요. 어르신 프로그램은 6층 대강당 방문 접수나 복지관 누리집 온라인 신청으로 받은 적이 있어요.', phone: '02-2204-9900' },
  { name: '옥수종합사회복지관', text: '확인된 수강신청 일정이 없어요. 프로그램에 따라 전화나 QR로 선착순 신청을 받은 적이 있어요.', phone: '02-2282-1100' },
  { name: '성동구 1인가구지원센터', text: '센터 누리집(sd1in.net)에서 회원가입·로그인 후 프로그램별로 신청해요. 모집 기간은 프로그램 상세 페이지에서 확인해야 하고, 1인 가구 확인 서류가 필요할 수 있어요.', phone: '02-2281-7715 ~ 7718' }
];
const EVT_LABEL = { festival: '🎪 마을 축제·구 행사', center: '🏠 복지관 소식' };
const pad2 = n => String(n).padStart(2, '0');
const ymd = (y, m, d) => `${y}-${pad2(m + 1)}-${pad2(d)}`;
const evEnd = e => e.end || e.start;
const fmtDate = s => { const [y, m, d] = s.split('-').map(Number); return `${m}월 ${d}일(${'일월화수목금토'[new Date(y, m - 1, d).getDay()]})`; };

function eventCard(e, today) {
  const done = evEnd(e) < today;
  const when = fmtDate(e.start) + (e.end && e.end !== e.start ? ' ~ ' + fmtDate(e.end) : '') + (e.time ? ' · ' + e.time : '');
  return el('article', { class: 'card ev' + (done ? ' done' : '') },
    el('p', { class: 'small ev-tag' }, EVT_LABEL[e.type] + (done ? ' · 종료된 행사' : '')),
    el('h3', {}, e.title),
    el('p', { style: 'margin:0 0 4px' }, '📅 ' + when),
    e.place && el('p', { style: 'margin:0 0 4px' }, '📍 ' + e.place),
    el('p', { style: 'margin:0 0 6px' }, e.summary),
    e.apply && el('p', { class: 'ev-apply' }, '📝 신청 방법: ' + e.apply),
    small(`출처: ${e.sourceLabel} · 확인 ${e.verifiedAt}`),
    e.applyUrl && !done && el('a', { class: 'more', href: e.applyUrl, target: '_blank', rel: 'noopener noreferrer' }, '신청 폼 열기 ↗'),
    el('a', { class: 'more', href: e.sourceUrl, target: '_blank', rel: 'noopener noreferrer' }, '공식 안내 보기 ↗'));
}

function calendarSection() {
  const now = new Date();
  const today = ymd(now.getFullYear(), now.getMonth(), now.getDate());
  let y = now.getFullYear(), m = now.getMonth(), sel = null;
  const wrap = el('section', { class: 'cal', 'aria-label': '행사 캘린더' });
  const shift = n => { const d = new Date(y, m + n, 1); y = d.getFullYear(); m = d.getMonth(); sel = null; draw(n < 0 ? 'prev' : 'next'); };

  function draw(focusKey) {
    const first = new Date(y, m, 1).getDay();
    const days = new Date(y, m + 1, 0).getDate();
    const monthStart = ymd(y, m, 1), monthEnd = ymd(y, m, days);
    const onDay = s => events.filter(e => e.start <= s && s <= evEnd(e));
    const cells = [];
    for (let i = 0; i < first; i++) cells.push(el('span', { class: 'cal-pad', 'aria-hidden': 'true' }));
    for (let d = 1; d <= days; d++) {
      const s = ymd(y, m, d), n = onDay(s).length;
      cells.push(el('button', {
        type: 'button', 'data-k': s, 'aria-pressed': String(sel === s),
        class: 'cal-day' + (s === today ? ' today' : '') + (sel === s ? ' sel' : '') + (n ? ' has' : ''),
        'aria-label': `${m + 1}월 ${d}일${s === today ? ', 오늘' : ''}${n ? `, 행사 ${n}개` : ''}`,
        onclick: () => { sel = sel === s ? null : s; draw(s); }
      }, String(d), n ? el('i', { class: 'dot', 'aria-hidden': 'true' }) : null));
    }
    const shown = (sel ? onDay(sel) : events.filter(e => e.start <= monthEnd && evEnd(e) >= monthStart))
      .slice().sort((a, b) => a.start.localeCompare(b.start));
    const heading = sel ? `${fmtDate(sel)} 행사` : `${m + 1}월 행사`;
    wrap.replaceChildren(
      el('div', { class: 'cal-head' },
        el('button', { type: 'button', class: 'cal-nav', 'data-k': 'prev', 'aria-label': '이전 달', onclick: () => shift(-1) }, '‹'),
        el('strong', { 'aria-live': 'polite' }, `${y}년 ${m + 1}월`),
        el('button', { type: 'button', class: 'cal-nav', 'data-k': 'next', 'aria-label': '다음 달', onclick: () => shift(1) }, '›')),
      el('div', { class: 'cal-grid', role: 'group', 'aria-label': `${y}년 ${m + 1}월 달력` },
        ...[...'일월화수목금토'].map((w, i) => el('span', { class: 'cal-dow' + (i === 0 ? ' sun' : ''), 'aria-hidden': 'true' }, w)),
        ...cells),
      small('● 표시가 있는 날짜를 누르면 그날의 행사를 볼 수 있어요. 다시 누르면 한 달 전체가 보여요.'),
      el('h3', { class: 'cal-sub' }, heading),
      ...(shown.length ? shown.map(e => eventCard(e, today))
        : [el('div', { class: 'bubble' }, '확인된 행사가 아직 없어요. 아래 링크에서 최신 소식을 확인해 보세요.')]));
    if (focusKey) wrap.querySelector(`[data-k="${focusKey}"]`)?.focus();
  }
  draw();
  return wrap;
}

// 첫 질문의 답을 고르면 바로 열리는 서비스: 카테고리 → { 답 → 서비스 id }
const directAnswers = { mobility: { '병원에 갈 때': 'v-hospital', '복지관이나 외부활동을 할 때': 'v-seonggong-bus' } };
const findService = id => id ? [...verifiedServices, ...services].find(s => s.id === id) : undefined;

/* ---------- Supabase에서 복지 정보 불러오기 ---------- */
// supabase-config.js 에 url·anonKey 가 있으면 아래 테이블에서 정보를 읽어 위의 내장 데이터를 대체합니다.
// 설정이 없거나 불러오기에 실패하면 내장 데이터를 그대로 씁니다. (테이블과 입력 데이터: supabase/schema.sql, supabase/seed.sql)
const SB = window.SUPABASE_CONFIG || {};
const contentFromDb = !!(SB.url && SB.anonKey);
// 예전 anon 키(eyJ…로 시작하는 JWT)는 Authorization 에도 넣고, 새 publishable 키(sb_publishable_…)는 apikey 헤더만 씁니다.
const sbHeaders = extra => ({ apikey: SB.anonKey, ...(SB.anonKey.startsWith('eyJ') ? { Authorization: 'Bearer ' + SB.anonKey } : {}), ...extra });
async function sbSelect(table, signal) {
  const res = await fetch(`${SB.url.replace(/\/+$/, '')}/rest/v1/${table}?select=*`, { signal, headers: sbHeaders() });
  if (!res.ok) throw new Error(`${table}: HTTP ${res.status}`);
  return res.json();
}
const nz = v => (v == null ? undefined : v); // DB의 null → 값 없음
const bySort = (a, b) => (a.sort ?? 0) - (b.sort ?? 0);
async function loadContent() {
  if (!contentFromDb) return false;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 6000);
  try {
    const names = ['categories', 'questions', 'services', 'facilities', 'facility_age_programs', 'facility_lonely_programs', 'age_groups', 'events', 'apply_guide', 'direct_answers'];
    const [cats, qs, svcs, facs, fap, flp, ags, evs, guide, direct] = await Promise.all(names.map(n => sbSelect(n, ctrl.signal)));
    if (!cats.length || !svcs.length || !facs.length || !ags.length) throw new Error('비어 있는 테이블이 있어 내장 데이터를 씁니다');

    const svcList = svcs.sort(bySort).map(r => ({
      id: r.id, name: r.name, summary: r.summary, eligibility: r.eligibility, benefit: r.benefit, agency: r.agency, address: r.address, phone: nz(r.phone),
      verified: !!r.verified, verifiedAt: nz(r.verified_at), sourceLabel: r.source_label, sourceUrl: r.source_url, tags: r.tags || [],
      note: nz(r.note), eligLabel: nz(r.elig_label), benefitLabel: nz(r.benefit_label), applyUrl: nz(r.apply_url),
      noBokjiro: !!r.no_bokjiro, tableAfterBenefit: !!r.table_after_benefit, table: nz(r.info_table)
    }));
    const facList = facs.sort(bySort).map(r => ({
      id: r.id, name: r.name, verified: true, facility: true, verifiedAt: r.verified_at, sourceLabel: r.source_label, summary: r.summary, address: r.address,
      phone: r.phone, hours: nz(r.hours), transit: nz(r.transit), homepage: r.homepage, sourceUrl: r.source_url, programs: r.programs || []
    }));
    const eventList = evs.sort(bySort).map(r => ({
      id: r.id, type: r.type, title: r.title, start: r.start_date, end: nz(r.end_date), time: nz(r.time_text), place: nz(r.place), summary: r.summary,
      apply: nz(r.apply_text), applyUrl: nz(r.apply_url), sourceLabel: r.source_label, sourceUrl: r.source_url, verifiedAt: r.verified_at
    }));
    const groupList = ags.sort(bySort).map(r => ({
      id: r.id, icon: r.icon, label: r.label, range: r.age_range, note: r.note, tel: r.tel_number ? [r.tel_number, r.tel_label] : undefined,
      services: r.service_ids || [], facs: r.facility_ids || []
    }));

    // 모두 정상으로 읽힌 뒤에 한꺼번에 바꿉니다 (중간에 실패하면 내장 데이터가 그대로 남습니다)
    categories.splice(0, categories.length, ...cats.sort(bySort).map(r => ({ id: r.id, icon: r.icon, label: r.label, short: r.short_label })));
    Object.keys(questions).forEach(k => delete questions[k]);
    qs.sort((a, b) => a.step - b.step).forEach(r => (questions[r.category_id] ||= []).push({ prompt: r.prompt, choices: r.choices || [] }));
    verifiedServices.splice(0, verifiedServices.length, ...svcList.filter(s => s.verified));
    services.splice(0, services.length, ...svcList.filter(s => !s.verified));
    facilities.splice(0, facilities.length, ...facList);
    Object.keys(agePrograms).forEach(k => delete agePrograms[k]);
    fap.forEach(r => ((agePrograms[r.facility_id] ||= {})[r.age_id] = r.items || []));
    Object.keys(lonelyPrograms).forEach(k => delete lonelyPrograms[k]);
    flp.forEach(r => (lonelyPrograms[r.facility_id] = r.items || []));
    ageGroups.splice(0, ageGroups.length, ...groupList);
    events.splice(0, events.length, ...eventList);
    applyGuide.splice(0, applyGuide.length, ...guide.sort(bySort).map(r => ({ name: r.name, text: r.body, phone: r.phone })));
    Object.keys(directAnswers).forEach(k => delete directAnswers[k]);
    direct.forEach(r => ((directAnswers[r.category_id] ||= {})[r.answer] = r.service_id));
    return true;
  } catch (err) {
    console.warn('Supabase에서 복지 정보를 불러오지 못해 내장 데이터를 사용합니다:', err);
    return false;
  } finally { clearTimeout(timer); }
}

/* ---------- 연령별 캐릭터 (이미지 없이 CSS로 그림) ---------- */
const AGE_MASCOT = {
  child: { label: '양 갈래 머리로 활짝 웃는 어린이 캐릭터', badge: '🍼', parts: ['am-tail l', 'am-tail r', 'am-tie l', 'am-tie r', 'am-hair small'] },
  teen: { label: '헤드폰을 쓴 청소년 캐릭터', badge: '🎒', parts: ['am-hair dome', 'am-band', 'am-cup l', 'am-cup r'] },
  youth: { label: '단정한 머리의 청년 캐릭터', badge: '💼', parts: ['am-hair side'] },
  middle: { label: '안경을 쓴 중장년 캐릭터', badge: '☕', parts: ['am-hair dome'], glasses: 'rect' },
  senior: { label: '하얀 머리에 둥근 안경을 쓴 어르신 캐릭터', badge: '🌼', parts: ['am-puff l', 'am-puff r', 'am-wisp l', 'am-wisp r'], glasses: 'round' }
};
function ageMascot(id) {
  const m = AGE_MASCOT[id];
  if (!m) return null; // DB에 새 연령대가 추가돼도 캐릭터가 없으면 건너뜁니다
  return el('div', { class: 'am ' + id, role: 'img', 'aria-label': m.label },
    el('div', { class: 'am-shadow' }), el('div', { class: 'am-shirt' }),
    ...m.parts.map(c => el('div', { class: c })),
    el('div', { class: 'am-body' },
      el('div', { class: 'am-eye l' }), el('div', { class: 'am-eye r' }), el('div', { class: 'am-smile' }, '⌣'),
      el('div', { class: 'am-blush l' }), el('div', { class: 'am-blush r' }),
      ...(m.glasses ? [el('div', { class: 'am-glass l ' + m.glasses }), el('div', { class: 'am-glass r ' + m.glasses }), el('div', { class: 'am-bridge' })] : [])),
    el('div', { class: 'am-badge', 'aria-hidden': 'true' }, m.badge));
}

/* ---------- 상담 신청 (Supabase) ---------- */
// 설정은 supabase-config.js, 테이블·보안(RLS) 설정은 supabase/schema.sql 에 있습니다.
// url·anonKey·retention(보관 기간 안내)이 모두 채워졌을 때만 양식이 열립니다.
// 상담 신청은 sheetUrl(구글시트)이 있으면 구글시트로, 없으면 Supabase 로 받습니다. 둘 중 하나 + retention(보관 기간 안내)이 있어야 열립니다.
const consultReady = !!((SB.sheetUrl || (SB.url && SB.anonKey)) && SB.retention);
const CONSULT_TIMES = ['아무 때나 괜찮아요', '평일 오전', '평일 오후', '평일 저녁'];
const consultTopics = () => [...categories.map(c => c.short), '잘 모르겠어요']; // DB에서 카테고리가 바뀌어도 맞도록 그때그때 만듭니다
const PHONE_RE = /^[0-9+() -]{8,20}$/;

async function submitConsult(row) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    if (SB.sheetUrl) { // 구글시트(Apps Script)로 보내기: Content-Type 을 text/plain 으로 보내야 브라우저 사전 확인(CORS preflight) 없이 전달됩니다
      const res = await fetch(SB.sheetUrl, { method: 'POST', signal: ctrl.signal, body: JSON.stringify(row) });
      const out = await res.json();
      if (!out.ok) throw new Error('sheet: ' + out.error);
      return;
    }
    const res = await fetch(SB.url.replace(/\/+$/, '') + '/rest/v1/consult_requests', {
      method: 'POST', signal: ctrl.signal,
      headers: sbHeaders({ 'Content-Type': 'application/json', Prefer: 'return=minimal' }),
      body: JSON.stringify(row)
    });
    if (!res.ok) throw new Error('HTTP ' + res.status);
  } finally { clearTimeout(timer); }
}

/* ---------- 음성 입력 · 읽어주기 (브라우저에 들어 있는 기능을 씁니다) ---------- */
// 음성 입력: 크롬·엣지·안드로이드에서 잘 되고, 지원하지 않는 브라우저에서는 🎤 버튼이 나타나지 않습니다.
// 읽어주기: 기기에 한국어 목소리가 있어야 소리가 납니다. 둘 다 서버 없이 브라우저가 처리합니다.
const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
const canListen = !!SpeechRec, canSpeak = 'speechSynthesis' in window;
const DIGIT_WORD = { 공: 0, 영: 0, 일: 1, 이: 2, 삼: 3, 사: 4, 오: 5, 육: 6, 륙: 6, 칠: 7, 팔: 8, 구: 9 };
const DIGIT_READ = ['공', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구'];
// "공일공 일이삼사 오육칠팔"처럼 말해도, "010 1234 5678"처럼 숫자로 들려도 010-1234-5678 모양으로 바꿉니다.
function spokenToPhone(text) {
  const digits = [...text].map(ch => (ch in DIGIT_WORD ? DIGIT_WORD[ch] : ch)).join('').replace(/\D/g, '');
  const m = /^(02)(\d{3,4})(\d{4})$/.exec(digits) || /^(\d{3})(\d{3,4})(\d{4})$/.exec(digits);
  return m ? m.slice(1).join('-') : digits;
}
const readPhone = v => v.split('-').map(g => [...g].map(d => DIGIT_READ[+d] ?? d).join(' ')).join(', ');
function speak(text) { // 소리를 냈으면 true, 한국어 목소리가 없으면 false
  if (!canSpeak) return false;
  const voices = speechSynthesis.getVoices();
  if (voices.length && !voices.some(v => v.lang.toLowerCase().startsWith('ko'))) return false;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ko-KR'; u.rate = 0.9;
  speechSynthesis.speak(u);
  return true;
}
const VOICE_ERRORS = {
  'not-allowed': '마이크를 쓸 수 없어요. 주소창 옆 자물쇠에서 마이크를 허용해 주세요.',
  'service-not-allowed': '이 브라우저에서는 음성 입력을 쓸 수 없어요. 직접 입력해 주세요.',
  'no-speech': '말소리가 들리지 않았어요. 버튼을 다시 누르고 말씀해 주세요.',
  'audio-capture': '마이크를 찾지 못했어요. 마이크가 연결돼 있는지 확인해 주세요.',
  network: '인터넷 연결을 확인해 주세요. 음성 입력은 인터넷이 필요해요.'
};
// 입력칸 아래에 붙는 "🎤 말로 입력" · "🔊 읽어주기" 버튼. kind: 'name' | 'phone'
function voiceBar(input, kind) {
  if (!canListen && !canSpeak) return null;
  const status = el('p', { class: 'small voice-msg', role: 'status' });
  let rec = null;
  const listen = canListen ? el('button', { type: 'button', class: 'voice-btn', 'aria-pressed': 'false', onclick: () => {
    if (rec) { rec.stop(); return; } // 듣는 중에 다시 누르면 멈춥니다
    const r = rec = new SpeechRec();
    let heard = false, failed = false;
    r.lang = 'ko-KR'; r.interimResults = false; r.maxAlternatives = 1;
    const idle = () => { rec = null; listen.classList.remove('on'); listen.setAttribute('aria-pressed', 'false'); listen.textContent = '🎤 말로 입력'; };
    r.onstart = () => { listen.classList.add('on'); listen.setAttribute('aria-pressed', 'true'); listen.textContent = '🎤 듣는 중… (누르면 멈춰요)'; status.textContent = kind === 'phone' ? '전화번호를 천천히 말씀해 주세요.' : '이름을 말씀해 주세요.'; };
    r.onresult = e => {
      heard = true;
      const said = e.results[0][0].transcript.trim();
      const value = (kind === 'phone' ? spokenToPhone(said) : said.replace(/[.。]+$/, '')).slice(0, +input.getAttribute('maxlength') || 50);
      if (!value) { status.textContent = '숫자를 알아듣지 못했어요. 한 자리씩 천천히 다시 말씀해 주세요.'; return; }
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      status.textContent = `입력된 내용: ${value}` + (canSpeak ? ' — 맞는지 "읽어주기"로 들어 보세요.' : ' — 맞는지 확인해 주세요.');
    };
    r.onerror = e => { failed = true; status.textContent = VOICE_ERRORS[e.error] || '음성을 알아듣지 못했어요. 직접 입력해 주세요.'; };
    r.onend = () => { if (!heard && !failed) status.textContent = '말씀을 듣지 못했어요. 버튼을 다시 눌러 주세요.'; idle(); };
    try { r.start(); } catch { idle(); status.textContent = '음성 입력을 시작하지 못했어요. 직접 입력해 주세요.'; }
  } }, '🎤 말로 입력') : null;
  const read = canSpeak ? el('button', { type: 'button', class: 'voice-btn', onclick: () => {
    const v = input.value.trim();
    const text = !v ? '아직 입력된 내용이 없어요.' : kind === 'phone' ? `전화번호는 ${readPhone(v)} 입니다.` : `이름은 ${v} 입니다.`;
    if (!speak(text)) status.textContent = '이 기기에는 한국어 읽어주기 목소리가 없어요.';
    else if (!v) status.textContent = text;
  } }, '🔊 읽어주기') : null;
  return el('div', { class: 'voice' }, el('div', { class: 'voice-bar' }, listen, read), status);
}

function consultForm() {
  const field =(id, label, control, hint) => el('div', { class: 'fld' }, el('label', { for: id }, label), control, hint && small(hint));
  const select = (id, opts, required) => el('select', { id, ...(required ? { required: '' } : {}) },
    el('option', { value: '' }, '선택해 주세요'), ...opts.map(([v, t]) => el('option', { value: v }, t)));
  const facility = select('cf-facility', facilities.map(f => [f.id, f.name]), true);
  const name = el('input', { id: 'cf-name', type: 'text', maxlength: '50', autocomplete: 'name' });
  const phone = el('input', { id: 'cf-phone', type: 'tel', maxlength: '20', autocomplete: 'tel', inputmode: 'tel', placeholder: '예) 010-1234-5678' });
  const topic = select('cf-topic', consultTopics().map(t => [t, t]), true);
  const time = select('cf-time', CONSULT_TIMES.map(t => [t, t]), false);
  const honey = el('input', { type: 'text', tabindex: '-1', autocomplete: 'off', class: 'hp', 'aria-hidden': 'true' }); // 자동 입력 봇 거르기
  const consent = el('input', { id: 'cf-consent', type: 'checkbox' });
  const msg = el('p', { class: 'form-msg', role: 'alert' });
  const submit = el('button', { type: 'submit', class: 'choice' }, '상담 신청하기');
  const form = el('form', { class: 'card consult-form', novalidate: '' },
    el('h3', {}, '상담 신청서'),
    field('cf-facility', '상담을 받고 싶은 곳', facility),
    canListen ? small('🎤 "말로 입력"을 누르면 브라우저(크롬 등)의 음성인식으로 말씀하신 소리를 글자로 바꿔요. 이때 소리가 브라우저를 만든 회사의 서버로 전송될 수 있고, 이 사이트에는 음성이 저장되지 않아요. 직접 써도 괜찮아요.') : null,
    field('cf-name', '이름 (또는 불리고 싶은 이름)', el('div', {}, name, voiceBar(name, 'name'))),
    field('cf-phone', '전화번호', el('div', {}, phone, voiceBar(phone, 'phone')), '연락드릴 번호예요.'),
    field('cf-topic', '상담 주제', topic),
    field('cf-time', '연락 가능한 시간 (선택)', time),
    honey,
    el('div', { class: 'disclosure' },
      el('strong', {}, '개인정보 수집·이용 안내'),
      el('p', {}, '• 받는 정보: 이름, 전화번호, 상담 주제, 연락 가능한 시간'),
      el('p', {}, '• 쓰는 곳: 상담 신청 확인과 연락 (선택하신 기관에서만 확인해요)'),
      el('p', {}, '• 보관 기간: ' + SB.retention),
      el('p', {}, '• 동의하지 않으셔도 복지정보는 그대로 볼 수 있어요. 다만 상담 신청은 할 수 없어요.')),
    el('label', { class: 'consent', for: 'cf-consent' }, consent, el('span', {}, '위 내용을 읽었고, 개인정보 수집·이용에 동의합니다.')),
    msg, submit);

  const fail = (text, target) => { msg.textContent = text; target?.focus(); };
  form.addEventListener('submit', async e => {
    e.preventDefault();
    msg.textContent = '';
    const row = { facility_id: facility.value, name: name.value.trim(), phone: phone.value.trim(), topic: topic.value, available_time: time.value || null, consent: consent.checked };
    if (!row.facility_id) return fail('상담을 받고 싶은 곳을 골라 주세요.', facility);
    if (!row.name) return fail('이름을 적어 주세요.', name);
    if (!PHONE_RE.test(row.phone) || row.phone.replace(/\D/g, '').length < 8) return fail('전화번호를 다시 확인해 주세요. 숫자와 - 만 쓸 수 있어요.', phone);
    if (!row.topic) return fail('상담 주제를 골라 주세요.', topic);
    if (!row.consent) return fail('개인정보 수집·이용에 동의하셔야 신청할 수 있어요.', consent);
    const f = facilities.find(x => x.id === row.facility_id);
    submit.disabled = true; submit.textContent = '보내는 중이에요…';
    try {
      if (!honey.value) await submitConsult(row); // 봇이 채우는 칸이 차 있으면 보내지 않고 성공처럼 보여 줍니다
      form.replaceWith(el('div', { class: 'card', role: 'status' },
        el('h3', {}, '상담 신청이 접수되었어요'),
        el('p', {}, `${f.name}에 전달했어요. 입력하신 번호로 기관에서 연락드려요. 기관 사정에 따라 연락이 늦어질 수 있으니, 급하시면 전화로 먼저 문의해 주세요.`),
        el('a', { class: 'choice', href: 'tel:' + (f.phone.match(/[0-9][0-9-]*/) || [''])[0].replace(/-/g, '') }, `📞  ${f.name} ${f.phone.split(' (')[0]}`),
        small('마음이 너무 힘들거나 위급하면 109(자살예방), 1577-0199(정신건강 위기상담), 119·112에 바로 연락해 주세요.')));
    } catch (err) {
      submit.disabled = false; submit.textContent = '상담 신청하기';
      fail(`지금은 접수하지 못했어요. 잠시 뒤 다시 시도하시거나 ${f.name} ☎ ${f.phone.split(' (')[0]} 로 전화해 주세요.`);
    }
  });
  return form;
}

/* ---------- 화면 ---------- */
/* ---------- 성공버스 시간표 ---------- */
// 출처: 성동구청 성공버스 안내(key=5108, 페이지 최종수정 2026-03-10, 2026-11-05 확인).
// 이 노선 소개 화면의 정류장 순서(stops)는 구청 메인 안내 기준이고, 기점 출발 시각은 "첫차 + 배차 간격 × (n-1)"입니다.
// 구청 노선별 운행시간표(정류장별 도착 시각)는 아래 BUS_TT 에 따로 있고, 두 방식의 기점 출발 시각이 서로 일치함을 확인했습니다.
const BUS_ROUTES = [
  { no: 1, color: '파랑', cls: 'r1', area: '성수–성동구청–응봉–신금호', start: '서울숲복합문화체육센터', first: '07:30', last: '18:33', arrive: '19:38', gap: 17, ride: 65, stops: [
    ['서울숲복합문화체육센터'], ['성동50플러스센터(한양대앞)', '3노선 환승'], ['성동구청(왕십리역 4번출구)', '2·3노선 환승'], ['성동청소년센터(성동우체국)'],
    ['행당제1동 주민센터(무학여고)'], ['응봉동 주민센터'], ['금호동1가 공영주차장(금호벽산하이피아 상가)'], ['성동아이사랑복합문화센터(금호고)'],
    ['금호2·3가동 주민센터'], ['금호1가동 주민센터'], ['성동구립 금호도서관'], ['금호동1가 공영주차장(성동행당새마을금고)'],
    ['응봉동 주민센터'], ['행당제1동 주민센터'], ['성동구청(왕십리역 6-1번출구)', '2·4노선 환승'], ['성동50플러스센터(한양대앞)', '3노선 환승'],
    ['서울숲복합문화체육센터(서울숲아이파크리버포레 1차)'], ['성수문화복지회관(뚝섬역 8번출구)'], ['성동지역경제혁신센터(뚝섬역 5번출구)'], ['성수역 스마트도서관'],
    ['성수2가제1동 주민센터'], ['성수1가제1동 주민센터'], ['언더스탠드에비뉴(서울숲역 2번출구)'], ['성수1가제2동 주민센터']] },
  { no: 2, color: '분홍', cls: 'r2', area: '용답–마장–사근–성동구청–상왕십리–보건소', start: '성동구립 용답체육센터', first: '07:20', last: '18:20', arrive: '19:20', gap: 20, ride: 60, stops: [
    ['성동구립 용답체육센터'], ['용답동 노인복지관'], ['용답 창업보육실'], ['용답동 주민센터'], ['성동구립 용답도서관(답십리역 2번출구)'], ['용답휴식공원(신답역)'],
    ['시립성동노인종합복지관'], ['마장동 주민센터'], ['사근동 마을활력소'], ['사근동 주민센터'], ['성동50플러스센터(한양시장)'], ['성동구청(왕십리역 4번출구)', '1·3노선 환승'],
    ['상왕십리역 스마트도서관'], ['왕십리도서관'], ['왕십리도선동 주민센터'], ['꽃재어린이공원'], ['성동구보건소'], ['성동구청(왕십리역 6-1번출구)', '1·4노선 환승'],
    ['성동50플러스센터(한양시장)'], ['사근동주민센터'], ['사근동 마을활력소'], ['마장동주민센터'], ['용답휴식공원(신답역)'], ['성동구립 용답도서관(답십리역 5번출구)'],
    ['용답동 주민센터'], ['용답 창업보육실'], ['용답동 노인복지관']] },
  { no: 3, color: '노랑', cls: 'r3', area: '송정–성동구청', start: '송정동 공공복합청사', first: '08:00', last: '18:50', arrive: '19:25', gap: 50, ride: 35, stops: [
    ['송정동 공공복합청사'], ['송정 스마트헬스케어센터'], ['송정제방길 어린이상상마당(성동세무서)'], ['성수2가제3동주민센터(금호베스트빌아파트)'], ['성동안심상가'],
    ['서울숲복합문화체육센터(한양대 방면)'], ['성동50플러스센터(한양대앞)', '1노선 환승'], ['성동구청(왕십리역 4번출구)', '1·2노선 환승'], ['소월아트홀'],
    ['성동50플러스센터(한양대앞)', '1노선 환승'], ['서울숲복합문화체육센터(성동세무서 방면)'], ['성동안심상가'], ['성수2가제3동주민센터'],
    ['송정제방길 어린이상상마당(성동세무서)'], ['송정 스마트헬스케어센터']] },
  { no: 4, color: '보라', cls: 'r4', area: '성동구청–옥수', start: '성동구청(왕십리역 6-1번출구)', first: '08:00', last: '19:00', arrive: '19:45', gap: 60, ride: 45, stops: [
    ['성동구청(왕십리역 6-1번출구)', '1·2노선 환승'], ['행당제2동 주민센터'], ['성동아이사랑복합문화센터'], ['금호4가동 주민센터'], ['옥수동 주민센터'], ['매봉산유아숲체험원'],
    ['옥수동 주민센터'], ['금호4가동 주민센터'], ['성동아이사랑복합문화센터'], ['행당제2동 주민센터'], ['행당제1동 주민센터'], ['성동구청(왕십리민자역사)']] }
];
const toMin = t => +t.slice(0, 2) * 60 + +t.slice(3); // pad2 는 위쪽(행사 일정)에 이미 있습니다
const hhmm =m => pad2(Math.floor(m / 60)) + ':' + pad2(m % 60);
const untilText = d => (d <= 0 ? '곧 출발해요' : d < 60 ? `${d}분 뒤` : `${Math.floor(d / 60)}시간 ${d % 60}분 뒤`);
function busDepartures(r) {
  const out = [];
  for (let m = toMin(r.first); m <= toMin(r.last); m += r.gap) out.push(m);
  return out;
}
function busRoutePanel(r) {
  const deps = busDepartures(r);
  const byHour = {};
  deps.forEach(m => (byHour[Math.floor(m / 60)] ||= []).push(m % 60));
  const now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes(), weekday = now.getDay() >= 1 && now.getDay() <= 5;
  const nextDep = deps.find(m => m >= nowMin);
  const nextText = !weekday ? '오늘은 주말이라 운행하지 않아요. 평일(월~금)에 운행해요.'
    : nextDep == null ? `오늘 막차 시간이 지났어요. 다음 운행일 첫차는 ${r.first}에 출발해요.`
    : `지금 시각 기준 다음 출발(예상): ${hhmm(nextDep)} · ${untilText(nextDep - nowMin)}`;
  return [
    el('h3', { class: 'bus-title' }, `${r.no}노선 (${r.color})`),
    el('p', { class: 'bus-area' }, '다니는 곳: ' + r.area),
    el('div', { class: 'bus-next', role: 'status' }, nextText),
    el('dl', { class: 'bus-facts' },
      el('div', {}, el('dt', {}, '출발하는 곳'), el('dd', {}, r.start)),
      el('div', {}, el('dt', {}, '첫차'), el('dd', {}, `${r.first} 출발`)),
      el('div', {}, el('dt', {}, '막차'), el('dd', {}, `${r.last} 출발 (종점 ${r.arrive} 도착)`)),
      el('div', {}, el('dt', {}, '배차 간격'), el('dd', {}, `${r.gap}분마다`)),
      el('div', {}, el('dt', {}, '한 바퀴'), el('dd', {}, `약 ${r.ride}분`))),
    el('table', { class: 'tbl bus-tbl' },
      el('caption', {}, `${r.no}노선 ${r.start} 출발 예상 시각 (평일)`),
      el('thead', {}, el('tr', {}, el('th', { scope: 'col' }, '시'), el('th', { scope: 'col' }, '출발하는 분'))),
      el('tbody', {}, Object.entries(byHour).map(([h, mins]) => {
        const cur = weekday && +h === now.getHours();
        return el('tr', { class: cur ? 'now' : '' },
          el('th', { scope: 'row' }, `${pad2(h)}시`, cur ? el('span', { class: 'now-tag' }, '지금') : null),
          el('td', {}, mins.map(m => el('span', { class: 'bus-min' }, pad2(m) + '분'))));
      }))),
    small('출발 시각은 구청 운행시간표(회차별 시각)와 같아요. 길이 막히면 늦어질 수 있어요. 내가 타는 정류장의 도착 시각은 위의 "정류장으로 시간표 찾기"에서 볼 수 있어요.'),
    el('details', { class: 'bus-stops' },
      el('summary', {}, `정류장 순서 보기 (${r.stops.length}곳)`),
      el('ol', {}, r.stops.map(([name, xfer]) => el('li', {}, name, xfer ? el('span', { class: 'xfer' }, xfer) : null))))
  ];
}
function busSchedule() {
  const panel = el('div', { class: 'bus-panel', role: 'tabpanel', id: 'bus-panel' });
  const tabs = el('div', { class: 'bus-tabs', role: 'tablist', 'aria-label': '성공버스 노선 고르기' });
  const show = r => {
    [...tabs.children].forEach((b, i) => { const on = BUS_ROUTES[i] === r; b.setAttribute('aria-selected', String(on)); b.classList.toggle('on', on); });
    panel.className = 'bus-panel ' + r.cls;
    panel.replaceChildren(...busRoutePanel(r));
  };
  BUS_ROUTES.forEach(r => tabs.append(el('button', { type: 'button', role: 'tab', class: 'bus-tab ' + r.cls, 'aria-selected': 'false', 'aria-controls': 'bus-panel', onclick: () => show(r) },
    el('span', { class: 'bus-chip', 'aria-hidden': 'true' }), `${r.no}노선 · ${r.color}`)));
  show(BUS_ROUTES[0]);
  return el('section', { class: 'bus' },
    el('div', { class: 'bus-quick' }, '🚌 월~금요일만 다녀요 (토·일·공휴일 쉼) · 요금 무료 · 휴대폰 앱의 QR 탑승권으로 타요 (만 65세 이상은 신분증)'),
    btn('🚌  정류장으로 시간표 찾기 (어디서 타세요?)', () => go('bus', { busStop: null })),
    el('h3', { class: 'bus-pick' }, '또는 노선을 골라 보세요'),
    tabs, panel);
}

/* ---------- "식사를 준비하기 어려워요" → 밑반찬 서비스 안내 ---------- */
// 출처(2026-11-06 확인): 성동구청 식사지원(key=5235, 최종수정 2025-11-04)·1인가구 지원사업(key=4778),
// 성동종합사회복지관 노인사회활동지원사업 안내(linksd.net co_id=0308), 서울시50플러스재단 2025 일자리 공고(성동종합복지관),
// 시정일보 2026-10-31 기사(성수2가제3동 협의체·성수종합복지관), 옥수종합사회복지관 누리집 연혁.
// 복지관 식당(경로식당): 시립성동노인종합복지관 경로식당 안내(sdsenior.or.kr co_id=SDS_306002)와 구청 복지관 시설 안내(key=1445·1446·1447, 층 위치)로 2026-11-06 확인.
//   성동종합·성수·옥수는 층 위치만 확인되고 운영 시간·요금은 누리집에 없어서 "전화로 확인"으로 적었습니다.
// 구청 안내에는 밑반찬을 하는 복지관 이름 목록이 없어서, 복지관별로 확인된 내용만 적고 확인 못 한 곳은 전화 확인으로 표시했습니다.
function sideDishResult() {
  const dial = n => 'tel:' + n.replace(/[^0-9]/g, '');
  const tel = (num, label, shown) => el('a', { class: 'choice', href: dial(num) }, `📞  ${label}  ${shown || num}`);
  const prog = t => el('p', { class: 'prog' }, '• ' + t);
  const centerCard = (id, lines, extra = []) => {
    const f = facilities.find(x => x.id === id);
    if (!f) return null;
    return el('div', { class: 'card' },
      el('h3', {}, f.name), ...lines.map(prog),
      el('p', { class: 'small' }, '📍 ' + f.address),
      el('a', { class: 'choice', href: dial((f.phone.match(/[0-9][0-9-]*/) || [''])[0]) }, `📞  ${f.name}에 전화하기  ${f.phone.split(' (')[0]}`),
      ...extra,
      btn('자세히 보기', () => go('detail', { detail: f }), true));
  };
  const extLink = (href, label) => el('a', { class: 'choice secondary', href, target: '_blank', rel: 'noopener noreferrer' }, label);
  const h3s = (t, top) => el('h2', { style: `font-size:1.15rem;margin-top:${top || 22}px` }, t);
  return [
    el('h2', {}, '식당과 밑반찬 서비스를 진행하고 있는 복지관이 있어요!'),
    h3s('밑반찬 활동이 확인된 복지관', 8),
    small('복지관 누리집, 공고, 기사로 확인한 내용이에요. 대상과 신청 방법은 복지관마다 다르니 전화로 한 번 더 물어보세요.'),
    el('div', { style: 'height:10px' }),
    centerCard('f-seongdong', [
      '"성동노인돌보미": 혼자 사시는 어르신 댁에 밑반찬을 배달하고 말벗이 되어 드려요 (노인사회활동지원사업, 복지관 누리집 안내)',
      '밑반찬·도시락을 포장해 배달하고 수거하는 일을 해요 (2025년 일자리 모집 공고 기준)',
      '🍚 식당: 지하 1층에 식당이 있고, 경로식당도 운영해요 (구청 시설 안내와 2025년 공고). 이용 시간과 요금은 확인하지 못했어요. 전화로 확인해 주세요'
    ]),
    centerCard('f-seongsu', [
      '성수2가제3동 지역사회보장협의체가 동 주민센터, 성수종합사회복지관과 함께 매달 밑반찬을 만들어 취약계층 40가구에 전달해요 (2026년 10월 보도)',
      '복지관이 직접 상시로 하는 서비스인지는 확인하지 못했어요. 전화로 물어봐 주세요',
      '🍚 식당: 6층에 "디미방"이라는 경로식당이 있어요 (구청 시설 안내). 이용 시간과 대상, 요금은 확인하지 못했어요. 전화로 확인해 주세요'
    ]),
    h3s('복지관 식당도 알아보세요', 24),
    small('밑반찬 배달을 지금도 하는지는 확인하지 못해서, 이 두 곳은 식당 정보를 먼저 알려 드려요.'),
    el('div', { style: 'height:10px' }),
    centerCard('f-sd-senior', [
      '🍚 경로식당: 월~금요일 11:30~13:00에 운영해요 (공휴일은 쉬어요)',
      '식권은 월~금요일 09:30~12:30에 1층 안내데스크에서 사요. 일반회원은 4,500원이고, 회원으로 등록된 성동구 수급권자는 무료예요 (무료급식은 담당자와 상담한 뒤 이용해요)',
      '이용 대상은 복지관 이용회원이에요 (나이와 거주 조건은 누리집에 적혀 있지 않아요)',
      '오늘의 식단이 복지관 누리집에 매일 올라와요',
      '재가복지·노인맞춤돌봄서비스도 운영해요. 밑반찬 배달 여부는 전화로 확인해 주세요'
    ], [
      tel('02-6341-8646', '경로식당 문의(복리후생 담당)'),
      extLink('https://www.sdsenior.or.kr/bbs/board.php?bo_table=SDS_1040&lang=ko&me_code=1040', '이번 주 식단 보기 ↗'),
      extLink('https://www.sdsenior.or.kr/bbs/content.php?co_id=SDS_306002&lang=ko&me_code=306002', '경로식당 안내 보기 ↗')
    ]),
    centerCard('f-oksu', [
      '🍚 식당: 2층에 경로식당이 있어요 (구청 시설 안내). 이용 시간과 대상, 요금은 확인하지 못했어요. 전화로 확인해 주세요',
      '옥수재가노인지원센터와 정수데이케어센터도 같은 층에 있어요. 2000년에 결식아동 밑반찬 제공 서비스를 시작한 이력이 있어요 (복지관 연혁)',
      '지금 밑반찬 배달을 하는지, 대상이 누구인지는 전화로 확인해 주세요'
    ]),
    h3s('복지관 말고 이런 지원도 있어요', 24),
    el('div', { class: 'card' },
      el('h3', {}, '돌봄SOS 식사지원'),
      prog('돌봄이 필요한데 도와줄 사람이 없을 때, 일반식·죽·반찬류를 만들어 집으로 배달해요'),
      prog('기초생활수급자, 차상위, 기준 중위소득 100% 이하는 전액 지원돼요 (연 이용 한도 180만원)'),
      prog('접수: 구청 통합돌봄과 또는 사시는 곳 동 주민센터'),
      tel('02-2286-6761', '통합돌봄과 문의', '02-2286-6761~3')),
    el('div', { class: 'card' },
      el('h3', {}, '중증재가장애인 밑반찬 배달'),
      prog('소득이 낮은 1인가구 중증장애인께 자원봉사자가 반찬을 만들어 집으로 가져다줘요'),
      prog('신청 방법은 구청 안내에 없어서 전화로 물어봐 주세요'),
      tel('02-2286-5445', '장애인복지과 문의')),
    btn('📚  다른 도움도 찾아보기', () => go('topics')),
    btn('🤝  상담 · 복지관 안내', () => go('consult'), true)
  ];
}

/* ---------- 성공버스: 타는 곳을 고르면 그 정류장의 도착 시각 보기 ---------- */
// 출처: 성동구청 성공버스 노선별 운행시간표(1노선 key=5407, 2노선 5408, 3노선 5409, 4노선 5410, 최종수정 2026-03-10·11), 2026-11-06 확인.
// 각 값은 "기점 출발 후 몇 분 뒤에 이 정류장에 도착하나"(표의 1회차 시각 기준)이고, n회차 시각은 기점 출발 시각(첫차 + 배차 간격 × (n-1))에 이 값을 더합니다.
// 표의 "소요(분)" 열과 시각 열이 일부 어긋나는 곳(1·2노선의 12→13 구간)이 있어 시각 열을 따랐고, 마지막 정류장까지의 합은 공식 한 바퀴 시간(65·60·35·45분)과 같습니다.
// 세 번째 값 'E'는 종점(내리는 곳)이라 "타는 곳" 목록에서 뺍니다. 같은 정류장을 가는 길·오는 길에 두 번 지나면 한 정류장에 시각표가 둘 나옵니다.
const BUS_TT = {
  1: { page: 5407, rows: [
    ['서울숲복합문화체육센터', 0], ['성동50플러스센터(한양대앞)', 3], ['성동구청(왕십리역 4번출구)', 7], ['성동청소년센터(성동우체국)', 9],
    ['행당제1동 주민센터(무학여고)', 11], ['응봉동 주민센터', 13], ['금호동1가 공영주차장(금호벽산하이피아 상가)', 15], ['성동아이사랑복합문화센터(금호고)', 17],
    ['금호2·3가동 주민센터', 19], ['금호1가동 주민센터(성동구보건소 금호분소)', 21], ['성동구립 금호도서관(성동공유센터)', 23], ['금호동1가 공영주차장(성동행당새마을금고)', 25],
    ['응봉동 주민센터', 29], ['행당제1동 주민센터', 32], ['성동구청(왕십리역 6-1번출구)', 37], ['성동50플러스센터(한양대앞)', 40],
    ['서울숲복합문화체육센터(서울숲아이파크리버포레 1차)', 43], ['성수문화복지회관(뚝섬역 8번출구)', 46], ['성동지역경제혁신센터(뚝섬역 5번출구)', 48],
    ['성수역 스마트도서관(성수역 3번출구)', 52], ['성수2가제1동 주민센터', 56], ['성수1가제1동 주민센터(성동상생도시센터)', 59],
    ['언더스탠드에비뉴(서울숲역 2번출구)', 61], ['성수1가제2동 주민센터', 63], ['서울숲복합문화체육센터(종점)', 65, 'E']] },
  2: { page: 5408, rows: [
    ['성동구립 용답체육센터', 0], ['용답동 노인복지관', 1], ['용답창업보육실(용답새마을금고)', 2], ['용답동 주민센터', 4], ['성동구립 용답도서관(답십리역 2번출구)', 7],
    ['용답휴식공원(신답역)', 12], ['시립성동노인종합복지관', 14], ['마장동주민센터', 16], ['사근동 마을활력소(사근제4경로당)', 18],
    ['사근동 주민센터(사근 스마트헬스케어센터)', 20], ['성동50플러스센터(한양시장)', 22], ['성동구청(왕십리역 4번출구)', 24], ['상왕십리역 스마트도서관', 28],
    ['왕십리장난감세상', 30], ['왕십리도선동주민센터', 31], ['꽃재어린이공원', 32], ['성동구보건소', 34], ['성동구청(왕십리역 6-1번출구)', 39],
    ['성동50플러스센터(한양시장)', 42], ['사근동주민센터(사근 스마트헬스케어센터)', 44], ['사근동 마을활력소(사근제4경로당)', 46], ['마장동주민센터', 48],
    ['용답휴식공원(신답역)', 51], ['성동구립 용답도서관(답십리역 5번출구)', 53], ['용답동 주민센터', 54], ['용답창업보육실(용답새마을금고)', 56],
    ['용답동 노인복지관', 59], ['성동구립 용답체육센터', 60, 'E']] },
  3: { page: 5409, rows: [
    ['송정동 공공복합청사', 0], ['송정 스마트헬스케어센터', 2], ['송정제방길 어린이상상마당(성동세무서)', 4], ['성수2가제3동주민센터(금호베스트빌아파트)', 6], ['성동안심상가', 8],
    ['서울숲복합문화체육센터(한양대 방면)', 10], ['성동50플러스센터(한양대앞)', 13], ['성동구청(왕십리역 4번출구)', 17], ['소월아트홀', 20],
    ['성동50플러스센터(한양대앞)', 22], ['서울숲복합문화체육센터(성동세무서 방면)', 25], ['성동안심상가', 27], ['성수2가제3동주민센터', 29],
    ['송정제방길 어린이상상마당(성동세무서)', 31], ['송정 스마트헬스케어센터', 33], ['송정동 공공복합청사', 35, 'E']] },
  4: { page: 5410, rows: [
    ['성동구청(왕십리역 6-1번출구)', 0], ['행당제2동 주민센터(행당역)', 7], ['성동아이사랑복합문화센터', 11], ['금호4가동 주민센터', 16], ['옥수동 주민센터', 19],
    ['매봉산 유아숲체험원', 23], ['옥수동 주민센터', 25], ['금호4가동 주민센터', 28], ['성동아이사랑복합문화센터', 32], ['행당제2동 주민센터(행당역)', 37],
    ['행당제1동 주민센터', 41], ['성동구청(왕십리민자역사)', 45, 'E']] }
};
// 같은 정류장인데 표마다 이름이 조금 다르게 적힌 것만 하나로 묶습니다 (출구·방면이 다른 정류장은 따로 둡니다)
const BUS_ALIAS = {
  '행당제1동 주민센터(무학여고)': '행당제1동 주민센터',
  '성수2가제3동주민센터': '성수2가제3동주민센터(금호베스트빌아파트)',
  '사근동주민센터(사근 스마트헬스케어센터)': '사근동 주민센터(사근 스마트헬스케어센터)'
};
const busKey = name => BUS_ALIAS[name] || name;
function busStops() {
  const map = new Map();
  BUS_ROUTES.forEach(r => BUS_TT[r.no].rows.forEach(([name, , end], i) => {
    if (end) return;
    const k = busKey(name);
    if (!map.has(k)) map.set(k, { key: k, routes: [], idx: {} });
    const s = map.get(k);
    if (!s.routes.includes(r.no)) s.routes.push(r.no);
    if (s.idx[r.no] == null) s.idx[r.no] = i;
  }));
  return [...map.values()];
}
function busTimeTable(times, caption, now) {
  const byHour = {};
  times.forEach(t => (byHour[Math.floor(t / 60)] ||= []).push(t % 60));
  return el('table', { class: 'tbl bus-tbl' },
    el('caption', {}, caption),
    el('thead', {}, el('tr', {}, el('th', { scope: 'col' }, '시'), el('th', { scope: 'col' }, '버스가 오는 분'))),
    el('tbody', {}, Object.entries(byHour).map(([h, mins]) => {
      const cur = now && +h === now.getHours();
      return el('tr', { class: cur ? 'now' : '' },
        el('th', { scope: 'row' }, `${pad2(h)}시`, cur ? el('span', { class: 'now-tag' }, '지금') : null),
        el('td', {}, mins.map(m => el('span', { class: 'bus-min' }, pad2(m) + '분'))));
    })));
}
// 정류장을 고른 뒤 보이는 화면: 그 정류장에 서는 노선별 도착 시각표
function busStopResult(key) {
  const now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes(), weekday = now.getDay() >= 1 && now.getDay() <= 5;
  const cards = BUS_ROUTES.map(r => {
    const passes = BUS_TT[r.no].rows.filter(([n, , end]) => !end && busKey(n) === key);
    if (!passes.length) return null;
    const starts = busDepartures(r);
    const all = passes.flatMap(([, off], pi) => starts.map(s => ({ t: s + off, pi })));
    const next = weekday ? all.filter(x => x.t >= nowMin).sort((a, b) => a.t - b.t)[0] : null;
    const dirName = pi => (passes.length > 1 ? (pi === 0 ? '가는 방향' : '돌아오는 방향') : '');
    const nextText = !weekday ? '오늘은 주말이라 운행하지 않아요. 평일(월~금)에 운행해요.'
      : next ? `지금 시각 기준 다음 도착(예상): ${hhmm(next.t)} · ${untilText(next.t - nowMin)}${passes.length > 1 ? ` (${dirName(next.pi)})` : ''}`
      : '오늘 막차 시간이 지났어요. 다음 운행일 첫차 시간표는 아래에서 확인하세요.';
    return el('div', { class: 'bus-panel ' + r.cls },
      el('h3', { class: 'bus-title' }, `${r.no}노선 (${r.color})`),
      el('p', { class: 'bus-area' }, '다니는 곳: ' + r.area),
      el('div', { class: 'bus-next', role: 'status' }, nextText),
      ...passes.map(([name, off], pi) => {
        const times = starts.map(s => s + off);
        return el('div', {},
          passes.length > 1 ? el('p', { class: 'bus-sub' }, `${dirName(pi)} 정류장`) : null,
          name !== key ? small('정류장 표지에 적힌 이름: ' + name) : null,
          busTimeTable(times, `${r.no}노선 ${key} 도착 예상 시각${passes.length > 1 ? ' · ' + dirName(pi) : ''} (평일, 첫차 ${hhmm(times[0])} · 막차 ${hhmm(times[times.length - 1])})`, weekday ? now : null));
      }));
  }).filter(Boolean);
  return [
    el('h2', {}, key),
    el('div', { class: 'bus-quick' }, `🚌 이 정류장에는 ${cards.length}개 노선이 서요. 월~금요일만 다니고(토·일·공휴일 쉼), 요금은 무료예요.`),
    ...cards,
    small('시각은 구청 운행시간표(출발 후 몇 분 뒤 도착)로 맞춘 예상이에요. 길이 막히면 늦어질 수 있으니 조금 일찍 나가 주세요. 정류장 표지판과 "성공버스" 앱에서도 확인할 수 있어요.'),
    btn('🚌  다른 정류장 고르기', () => go('bus', { busStop: null })),
    el('details', { class: 'bus-stops' },
      el('summary', {}, '구청 공식 운행시간표 보기'),
      ...BUS_ROUTES.map(r => el('a', { class: 'choice secondary', href: `https://www.sd.go.kr/main/contents.do?key=${BUS_TT[r.no].page}`, target: '_blank', rel: 'noopener noreferrer' }, `${r.no}노선 (${r.color}) 시간표 ↗`)))
  ];
}
// 처음 보이는 화면: 어디서 타는지 고르기 (이름으로 찾기 + 노선으로 좁히기)
function busPickerScreen() {
  const stops = busStops();
  let routeFilter = 0, query = '';
  const norm = s => s.replace(/\s+/g, '');
  const search = el('input', { type: 'search', id: 'bus-q', placeholder: '정류장 이름 쓰기 (예: 성동구청)', autocomplete: 'off' });
  const chips = el('div', { class: 'bus-chips', role: 'group', 'aria-label': '노선으로 좁혀 보기' });
  const count = el('p', { class: 'small', role: 'status' });
  const list = el('div', { class: 'stop-list' });
  const draw = () => {
    const q = norm(query);
    const shown = stops.filter(s => (!routeFilter || s.routes.includes(routeFilter)) && (!q || norm(s.key).includes(q)))
      .sort((a, b) => (routeFilter ? a.idx[routeFilter] - b.idx[routeFilter] : a.key.localeCompare(b.key, 'ko')));
    count.textContent = shown.length ? `정류장 ${shown.length}곳${routeFilter ? ' (다니는 순서대로)' : ''}` : '찾는 정류장이 없어요. 글자를 줄여서 다시 써 보세요.';
    list.replaceChildren(...shown.map(s => el('button', { type: 'button', class: 'stop-btn', onclick: () => go('bus', { busStop: s.key }) },
      el('span', {}, s.key),
      el('span', { class: 'stop-rt' }, ...s.routes.map(n => el('span', { class: 'rt r' + n }, n + '노선'))))));
  };
  const setRoute = n => {
    routeFilter = n;
    [...chips.children].forEach((b, i) => { b.classList.toggle('on', i === n); b.setAttribute('aria-pressed', String(i === n)); });
    draw();
  };
  [['전체', 0], ...BUS_ROUTES.map(r => [`${r.no}노선 ${r.color}`, r.no])].forEach(([label, n]) =>
    chips.append(el('button', { type: 'button', class: 'chip' + (n ? ' r' + n : ''), 'aria-pressed': 'false', onclick: () => setRoute(n) }, label)));
  search.addEventListener('input', () => { query = search.value; draw(); });
  setRoute(0);
  return [
    el('h2', {}, '성공버스 시간표'),
    bubble('어디서 타실지 고르면, 그 정류장에 버스가 오는 시각이 나와요. 성공버스는 성동구 공공시설을 도는 무료 셔틀버스이고, 누구나 탈 수 있어요. 월~금요일만 다녀요.'),
    el('div', { class: 'fld' }, el('label', { for: 'bus-q' }, '어디서 타세요?'), search),
    el('p', { class: 'small' }, '노선(색깔)을 눌러서 좁혀 볼 수도 있어요.'),
    chips, count, list,
    el('div', { style: 'height:14px' }),
    btn('성공버스 이용 방법 자세히 보기', () => go('detail', { detail: verifiedServices.find(s => s.id === 'v-seonggong-bus') || SEONGGONG_BUS }), true)
  ];
}

const screens = {
  home() {
    return [
      el('section', { class: 'welcome' },
        el('div', { class: 'mascot', role: 'img', 'aria-label': '부드러운 살구색 얼굴의 웃는 복지 길잡이 캐릭터' },
          el('div', { class: 'm-shadow' }), el('div', { class: 'm-ear l' }), el('div', { class: 'm-ear r' }),
          el('div', { class: 'm-body' }, el('div', { class: 'm-eye l' }), el('div', { class: 'm-eye r' }), el('div', { class: 'm-smile' }, '⌣'), el('div', { class: 'm-blush l' }), el('div', { class: 'm-blush r' })),
          el('div', { class: 'm-wave' }, '👋')),
        el('h1', {}, '무엇이 필요한지', el('br'), '잘 몰라도 괜찮아요.'),
        el('p', {}, '생활 속 어려움이 있으신가요?', el('br'), '도움이 될 만한 복지정보를 확인할 수 있어요.')),
      el('button', { type: 'button', class: 'main-btn', onclick: () => go('topics') }, '💬  질문하며 따라가기'),
      el('button', { type: 'button', class: 'main-btn', onclick: () => go('ages') }, '🎂  연령별 정보 알아보기'),
      el('button', { type: 'button', class: 'sub-btn', onclick: () => go('consult') }, '상담 · 복지관 안내'),
      small('로그인 없이 이용할 수 있어요.', 'center')
    ];
  },
  topics() {
    return [
      small('첫 번째 질문'),
      el('h2', {}, '어떤 복지정보가 필요하신가요?'),
      bubble(['아래에 2개의 질문을 통해 복지정보를 쉽게 알아볼 수 있어요! 복지관 상담을 원하시면 ', el('strong', { class: 'em' }, '❔ 어떤 도움을 받을 수 있는지 모르겠어요'), ' 눌러주세요!']),
      ...categories.map(c => btn(categoryLabel(c), () => c.id === 'unknown'
          ? go('results', { category: c.id, step: 0, answers: [] }) // 모르겠다면 질문 없이 바로 복지정보와 상담 안내
          : go('questions', { category: c.id, step: 0, answers: [] }),
        c.id === 'center')) // 복지관 버튼은 흰색(secondary) 스타일
    ];
  },
  ages() {
    return [
      el('h2', {}, '어떤 연령대의 정보가 궁금하세요?'),
      bubble('나이를 누르면 그 나이에 맞는 지원과 성동구 복지관·센터 정보를 보여드려요. 가족을 위해 알아보셔도 괜찮아요.'),
      ...ageGroups.map(g => btn(`${g.icon}  ${g.label} (${g.range})`, () => go('age-result', { age: g.id }))),
      btn('💬  질문하며 따라가기', () => go('topics'), true)
    ];
  },
  'age-result'() {
    const g = ageGroups.find(x => x.id === state.age);
    const all = [...verifiedServices, ...services];
    const card = s => el('button', { type: 'button', class: 'card', onclick: () => go('detail', { detail: s }) },
      el('h3', {}, s.name), small(s.summary), el('span', { class: 'more' }, '자세히 보기  ›'));
    // 노인복지관(이름에 "노인…복지관")은 따로 묶어서 보여 줍니다
    const centers = g.facs.map(id => facilities.find(f => f.id === id)).filter(f => f && agePrograms[f.id]?.[g.id]);
    const isSenior = f => /노인(종합)?복지관/.test(f.name);
    const seniorCenters = centers.filter(isSenior), otherCenters = centers.filter(f => !isSenior(f));
    const programCard = f => el('button', { type: 'button', class: 'card', onclick: () => go('detail', { detail: f }) },
      el('h3', {}, f.name),
      ...agePrograms[f.id][g.id].map(t => el('p', { class: 'prog' }, '• ' + t)),
      small('📍 ' + f.address), small('☎ ' + f.phone), el('span', { class: 'more' }, '자세히 보기  ›'));
    return [
      ageMascot(g.id),
      el('h2', { class: 'center' }, `${g.label} (${g.range})`),
      small(g.note, 'center'),
      el('div', { style: 'height:10px' }),
      ...(g.tel ? [el('a', { class: 'choice', href: 'tel:' + g.tel[0] }, `📞  ${g.tel[1]} ${g.tel[0]}`)] : []),
      el('h2', { style: 'font-size:1.15rem' }, '살펴볼 만한 지원'),
      ...g.services.map(id => all.find(s => s.id === id)).filter(Boolean).map(card),
      ...(seniorCenters.length ? [
        el('h2', { style: 'font-size:1.15rem;margin-top:20px' }, '🏠 우리 동네 노인복지관'),
        small('성동구에는 시립 노인종합복지관 1곳과 동네 노인복지관이 있어요. 가까운 곳을 찾아 전화해 보세요. 기관 공식 안내로 확인한 내용이고, 대상과 운영은 바뀔 수 있어요.'),
        el('div', { style: 'height:10px' }),
        ...seniorCenters.map(programCard)] : []),
      el('h2', { style: 'font-size:1.15rem;margin-top:20px' }, '우리 복지관은 이런 프로그램을 하고 있어요!'),
      small('기관 공식 안내로 확인한 내용이에요. 대상과 모집 시기는 바뀔 수 있으니 신청 전에 전화로 확인해 주세요.'),
      el('div', { style: 'height:10px' }),
      ...otherCenters.map(programCard),
      small('이 사이트는 지원 자격을 판정하지 않습니다. 정확한 대상 여부는 129 또는 주민센터에서 확인해 주세요.'),
      el('div', { style: 'height:14px' }),
      btn('💰  소득이 어려울 때 받을 수 있는 지원 보기', () => go('results', { category: 'money', step: 0, answers: [] })),
      seoulPortalLink(),
      btn('🎂  다른 연령대 보기', () => go('ages'), true),
      btn('🤝  상담 · 복지관 안내', () => go('consult'), true)
    ];
  },
  questions() {
    const qs = questions[state.category];
    const q = qs[state.step];
    const next = answer => {
      const answers = [...state.answers.slice(0, state.step), answer ?? ''];
      // 첫 질문의 답에 연결된 서비스가 있으면 그 안내로 바로 이동 (예: 이동 → '병원에 갈 때')
      const target = state.step === 0 ? findService(directAnswers[state.category]?.[answer]) : null;
      if (target) return go('detail', { answers, detail: target });
      if (state.step + 1 >= qs.length) go('results', { answers });
      else go('questions', { answers, step: state.step + 1 });
    };
    return [
      small(`${['두', '세', '네', '다섯'][state.step] || state.step + 2} 번째 질문 · 답변을 건너뛰어도 괜찮아요.`),
      bubble(q.prompt),
      ...q.choices.map(ch => btn(ch, () => next(ch))),
      btn('답변 건너뛰기', () => next(null), true)
    ];
  },
  results() {
    if (state.category === 'food' && state.answers[0]?.includes('식사를 준비')) return sideDishResult(); // 기존 서비스 목록 대신 밑반찬 안내
    if (state.category === 'center') {
      return [
        el('h2', {}, '성동구 복지관 · 센터 위치'),
        small('성동구의 복지관과 센터입니다. 카드에 주요 사업을 간단히 적었고, 누르면 사업 소개 전체와 주소, 전화번호, 오시는 길을 볼 수 있어요.'),
        el('div', { style: 'height:14px' }),
        ...facilities.map(facilityCard),
        small('운영시간과 프로그램은 기관마다 다르니 방문 전에 전화로 확인해 주세요.'),
        el('div', { style: 'height:14px' }),
        seoulPortalLink(),
        btn('📚  다른 도움도 찾아보기', () => go('topics')),
        btn('🤝  상담 · 복지관 안내', () => go('consult'), true)
      ];
    }
    if (state.category === 'crisis') {
      const tel = (num, label) => el('a', { class: 'choice', href: 'tel:' + num.replace(/[^0-9]/g, '') }, `📞  ${label} ${num}`);
      return [
        el('h2', {}, '지금 도움받을 수 있는 곳'),
        el('div', { class: 'warn' }, '혼자 힘들어하지 않으셔도 괜찮아요. 아래 전화는 모두 누르면 바로 연결돼요. 생명이나 안전이 위험하면 먼저 119·112에 연락해 주세요.'),
        tel('119 · 112', '위급할 때'),
        tel('109', '자살예방 상담 (24시간)'),
        tel('1577-0199', '정신건강 위기상담 (24시간)'),
        tel('129', '긴급복지·복지 상담 (보건복지상담센터)'),
        tel('1366', '여성긴급전화'),
        el('div', { style: 'height:14px' }),
        el('h2', { style: 'font-size:1.1rem' }, '살펴볼 만한 지원'),
        ...rankServices().filter(s => s.verified).slice(0, 3).map(s => el('button', { type: 'button', class: 'card', onclick: () => go('detail', { detail: s }) },
          el('h3', {}, s.name), small(s.summary), el('span', { class: 'more' }, '자세히 보기  ›'))),
        facilityCard(facilities.find(f => f.id === 'f-mental')),
        small('이 사이트는 자격을 판정하지 않습니다. 정확한 지원 여부는 129 또는 주민센터에서 확인해 주세요.'),
        el('div', { style: 'height:14px' }),
        seoulPortalLink(),
        btn('📚  다른 도움도 찾아보기', () => go('topics')),
        btn('🤝  상담 · 복지관 안내', () => go('consult'), true)
      ];
    }
    if (state.category === 'lonely') {
      const telHref = f => 'tel:' + (f.phone.match(/[0-9][0-9-]*/) || [''])[0].replace(/-/g, '');
      // 이야기 나눌 사람을 원하면 마음 상담 기관을 맨 앞에 보여줍니다.
      const order = ['f-itda', 'f-single', 'f-seongdong', 'f-seongsu', 'f-oksu', 'f-mental'];
      if (state.answers[0]?.includes('이야기')) order.unshift(order.splice(order.indexOf('f-mental'), 1)[0]);
      // "새로운 취미를 배우며 친해지고 싶어요"를 고르면 취미 수업·모임이 있는 곳만 보여 줍니다
      const hobby = !!state.answers[0]?.includes('취미');
      if (hobby) order.splice(0, order.length, 'f-single', 'f-seongsu', 'f-seongdong', 'f-oksu', 'f-itda');
      // "혼자서 쉬고 싶어요"를 고르면 서울잇다플레이스를 맨 위에 자세히 소개합니다 (DB에 아직 없으면 기존 목록을 그대로 보여 줍니다)
      const itda = facilities.find(f => f.id === 'f-itda');
      const alone = !!(state.answers[0]?.includes('혼자서') && itda && lonelyPrograms[itda.id]);
      const lonelyCard = (f, intro) => el('div', { class: 'card' },
        el('h3', {}, f.name),
        intro ? el('p', {}, f.summary) : null,
        ...lonelyPrograms[f.id].map(t => el('p', { class: 'prog' }, '• ' + t)),
        el('p', { class: 'small' }, '📍 ' + f.address),
        intro && f.hours ? el('p', { class: 'small' }, '🕘 ' + f.hours) : null,
        el('a', { class: 'choice', href: telHref(f) }, `📞  ${f.name}에 전화하기  ${f.phone.split(' (')[0]}`),
        btn('자세히 보기', () => go('detail', { detail: f }), true));
      const others = order.filter(id => !(alone && id === 'f-itda')).map(id => facilities.find(f => f.id === id)).filter(f => f && lonelyPrograms[f.id]);
      return [
        ...(alone ? [
          el('h2', {}, '잇다플레이스는 어떠세요?'),
          bubble('혼자서 쉬고 싶은 날, 서울시복지재단 고립예방센터가 운영하는 "서울잇다플레이스"를 소개해요.'),
          lonelyCard(itda, true),
          el('h2', { style: 'font-size:1.15rem;margin-top:22px' }, '다른 곳도 알아보세요'),
          small('마음이 가는 곳에 전화로 편하게 물어보세요. 기관 공식 안내로 확인한 내용이며, 대상과 모집 시기는 바뀔 수 있어요.')
        ] : hobby ? [
          el('h2', {}, '새로운 취미를 함께 배울 수 있는 곳'),
          small('취미 수업이나 모임에서 이웃을 만날 수 있는 곳이에요. 마음이 가는 곳에 전화로 편하게 물어보세요. 기관 공식 안내로 확인한 내용이며, 대상과 모집 시기는 바뀔 수 있어요.')
        ] : [
          el('h2', {}, '우리 복지관에 연락주세요'),
          small('혼자라고 느껴질 때 함께할 수 있는 프로그램이에요. 마음이 가는 곳에 전화로 편하게 물어보세요. 기관 공식 안내로 확인한 내용이며, 대상과 모집 시기는 바뀔 수 있어요.')
        ]),
        el('div', { style: 'height:14px' }),
        ...others.map(f => lonelyCard(f, false)),
        el('a', { class: 'choice secondary', href: 'tel:15770199' }, '💙  마음이 너무 힘들 땐 정신건강 위기상담 1577-0199 (24시간)'),
        btn('📚  다른 도움도 찾아보기', () => go('topics')),
        btn('🤝  상담 · 복지관 안내', () => go('consult'), true)
      ];
    }
    const list = rankServices();
    const c = catById(state.category);
    const unsure = state.category === 'unknown';
    return [
      el('h2', {}, unsure ? '이런 도움을 받을 수 있어요' : '이런 복지정보를 살펴보세요'),
      small(unsure
        ? '무엇이 필요한지 몰라도 괜찮아요. 먼저 살펴볼 만한 복지정보를 모았어요. 지원 자격 판정이 아니며, 궁금하면 상담도 안내받을 수 있어요.'
        : `${c.short} 관련 안내 항목 ${list.length}개입니다. 답변에 따른 참고 순서이며, 지원 자격 판정이 아닙니다.`),
      el('div', { style: 'height:14px' }),
      ...(unsure ? [btn('🤝  상담 · 복지관 안내 바로가기', () => go('consult'))] : []),
      ...list.map(s => el('button', { type: 'button', class: 'card', onclick: () => go('detail', { detail: s }) },
        el('h3', {}, s.name), small(s.summary), el('span', { class: 'more' }, '자세히 보기  ›'))),
      seoulPortalLink(),
      btn('📚  다른 도움도 찾아보기', () => go('topics')),
      btn('🤝  상담 · 복지관 안내', () => go('consult'), true)
    ];
  },
  detail() {
    const d = state.detail;
    const v = !!d.verified;
    const isBus = d.id === 'v-seonggong-bus'; // 성공버스는 노선별 시간표 화면을 따로 보여 줍니다
    const table = isBus ? null : d.table && el('table', { class: 'tbl' },
      el('thead', {}, el('tr', {}, d.table.head.map(h => el('th', { scope: 'col' }, h)))),
      el('tbody', {}, d.table.rows.map(r => el('tr', {}, r.map(c => el('td', {}, c))))));
    if (d.facility) {
      const frows = [['소개', d.summary], d.programs && ['주요 사업·프로그램', d.programs.map(p => el('div', {}, '• ' + p))], ['주소', d.address], ['전화', d.phone], d.hours && ['운영시간', d.hours], d.transit && ['오시는 길', d.transit], ['공식 출처', d.sourceLabel], ['마지막 확인 날짜', d.verifiedAt]].filter(Boolean);
      return [
        el('h2', {}, d.name),
        el('div', { class: 'warn' }, '성동구 공식 안내로 확인한 정보입니다. 운영시간·휴관일은 바뀔 수 있으니 방문 전에 전화로 확인해 주세요.'),
        el('dl', { class: 'info' }, frows.map(([k, val]) => el('div', {}, el('dt', {}, k), el('dd', {}, val)))),
        el('a', { class: 'choice', href: mapUrl(d.address), target: '_blank', rel: 'noopener noreferrer' }, '📍 지도에서 위치 보기 ↗'),
        d.homepage ? el('a', { class: 'choice secondary', href: d.homepage, target: '_blank', rel: 'noopener noreferrer' }, '기관 홈페이지 ↗') : null,
        el('a', { class: 'choice secondary', href: d.sourceUrl, target: '_blank', rel: 'noopener noreferrer' }, '성동구 공식 안내 확인하기 ↗'),
        btn('🤝  상담 · 복지관 안내', () => go('consult'), true)
      ];
    }
    const rows = [
      ['서비스 소개', d.summary],
      [d.eligLabel || (v ? '지원 대상 및 소득 기준' : '지원 대상 및 조건'), d.tableAfterBenefit ? d.eligibility : [d.eligibility, table]],
      [d.benefitLabel || (v ? '급여(지원 내용)' : '지원 내용'), d.tableAfterBenefit ? [d.benefit, table] : d.benefit],
      ['담당 기관', d.agency], ['연락처', v ? d.phone : '미확인'], ['위치', d.address],
      ['공식 출처', d.sourceLabel], ['마지막 확인 날짜', v ? d.verifiedAt : '미확인 — 데모']
    ];
    return [
      el('h2', {}, d.name),
      el('div', { class: 'warn' }, d.note ? d.note : v
        ? '2026년 기준 보건복지부 공식 자료로 확인한 내용입니다. 소득 기준은 매년 바뀌며, 실제 수급 여부는 소득인정액(소득·재산) 조사 후 결정됩니다. 이 사이트는 자격을 판정하지 않습니다.'
        : '⚠️ 검증 전 예시 데이터 — 실제 서비스·지원 조건으로 사용하지 마세요.'),
      isBus ? busSchedule() : null,
      el('dl', { class: 'info' }, rows.map(([k, val]) => el('div', {}, el('dt', {}, k), el('dd', {}, val)))),
      d.applyUrl ? el('a', { class: 'choice', href: d.applyUrl, target: '_blank', rel: 'noopener noreferrer' }, '신청 안내 페이지 열기 ↗') : null,
      el('a', { class: d.applyUrl ? 'choice secondary' : 'choice', href: d.sourceUrl, target: '_blank', rel: 'noopener noreferrer' }, '공식 자료에서 확인하기 ↗'),
      d.noBokjiro ? null : v ? el('a', { class: 'choice secondary', href: 'https://www.bokjiro.go.kr', target: '_blank', rel: 'noopener noreferrer' }, '복지로에서 신청·모의계산 알아보기 ↗')
        : el('button', { type: 'button', class: 'choice secondary', disabled: '' }, '위치 및 길 찾기 — 공식 주소 확인 후 제공 예정'),
      btn('🤝  상담 · 복지관 안내', () => go('consult'), true)
    ];
  },
  consult() {
    return [
      el('h2', {}, '상담 · 복지관 안내'),
      bubble('상담하지 않아도 복지정보와 복지관 안내를 자유롭게 볼 수 있어요. 원하는 메뉴를 선택해 주세요.'),
      btn('🏠  성동구 복지관 정보 보기', () => go('center-info')),
      el('h2', { style: 'font-size:1.1rem;margin-top:22px' }, '상담 신청 (선택)'),
      ...(consultReady ? [consultForm()] : [
        el('div', { class: 'card' },
          el('h3', {}, '정식 운영 시 수집 예정 항목'),
          el('p', {}, '• 이름 • 전화번호 • 상담 주제 • 연락 가능한 시간'),
          small('현재는 시연 단계이므로 개인정보를 입력하거나 전송받지 않습니다. 운영기관과 보관·삭제 기준을 확정하고 안전한 저장 체계를 갖춘 다음 실제 접수 기능을 열 예정입니다.')),
        el('button', { type: 'button', class: 'choice', disabled: '' }, '상담 신청 — 시연 단계에서 비활성화')]),
      btn('복지정보 계속 보기', reset, true)
    ];
  },
  'center-info'() {
    return [
      el('h2', {}, '성동구 복지관 정보'),
      bubble('복지관을 처음 이용하셔도 괜찮아요. 복지관마다 제공하는 프로그램과 이용 대상이 다를 수 있습니다.'),
      el('h2', { style: 'font-size:1.2rem' }, '📅 행사 캘린더'),
      calendarSection(),
      el('p', { class: 'small' }, '공식 안내로 확인한 일정만 담았습니다. 일정은 바뀔 수 있으니 참여 전에 한 번 더 확인해 주세요.'),
      el('h2', { style: 'font-size:1.2rem;margin-top:22px' }, '📝 수강신청은 언제, 어떻게 하나요?'),
      el('p', { class: 'small' }, '복지관은 프로그램마다 접수 날짜가 다르고, 날짜를 공지하지 않는 곳도 많아요. 공개된 내용만 정리했으니 신청 전에 전화로 한 번 더 확인해 주세요.'),
      ...applyGuide.map(g => el('div', { class: 'card' }, el('h3', {}, g.name), el('p', { style: 'margin:0 0 6px' }, g.text), small('☎ ' + g.phone))),
      el('div', { style: 'height:14px' }),
      el('h2', { style: 'font-size:1.2rem' }, '복지관 · 센터 위치'),
      ...facilities.map(facilityCard),
      el('a', { class: 'choice', href: 'https://www.sd.go.kr', target: '_blank', rel: 'noopener noreferrer' }, '성동구청 공식 사이트에서 알아보기 ↗'),
      btn('상담 · 복지관 안내로 이동', () => go('consult'), true)
    ];
  }
};

screens.bus = () => (state.busStop ? busStopResult(state.busStop) : busPickerScreen());

function render() {
  $main.replaceChildren(...screens[state.screen]().filter(Boolean));
  const home = state.screen === 'home';
  $banner.hidden = home;
  $bottom.hidden = home;
  window.scrollTo(0, 0);
  if (!home) $main.focus({ preventScroll: true });
}

/* ---------- 글자 크기 ---------- */
let scale = 1;
const fontBtn = document.getElementById('fontBtn');
fontBtn.addEventListener('click', () => {
  scale = scale >= 1.35 ? 1 : +(scale + 0.15).toFixed(2);
  document.documentElement.style.setProperty('--scale', scale);
  fontBtn.setAttribute('aria-label', `글자 크기 변경 (현재 ${Math.round(scale * 100)}%)`);
});

/* ---------- 성공버스 시간표 보기 (머리글 버튼) ---------- */
document.getElementById('busBtn').addEventListener('click', () => { setSiteMenu(false); go('bus', { busStop: null }); });

/* ---------- 복지사이트 메뉴 ---------- */
const siteBtn = document.getElementById('siteBtn');
const sitePanel = document.getElementById('sitePanel');
function setSiteMenu(open) {
  sitePanel.hidden = !open;
  siteBtn.setAttribute('aria-expanded', String(open));
}
siteBtn.addEventListener('click', () => setSiteMenu(sitePanel.hidden));
document.addEventListener('click', (e) => {
  if (!e.target.closest('.site-menu')) setSiteMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !sitePanel.hidden) { setSiteMenu(false); siteBtn.focus(); }
});

if (consultReady) { // 접수 기능이 켜지면 하단 안내도 사실대로 바꿉니다
  const note = document.getElementById('footNote');
  if (note) note.textContent = '이 사이트는 시연용 초안입니다. 상담 신청서를 직접 작성해 보내신 경우에만 이름·전화번호 등이 선택하신 기관에 전달되며, 그 밖에는 개인정보를 입력받거나 저장하지 않습니다.';
}

document.getElementById('brand').addEventListener('click', reset);
document.getElementById('homeBtn').addEventListener('click', reset);
document.getElementById('backBtn').addEventListener('click', back);

// 처음 화면은 Supabase에서 정보를 읽은 뒤(최대 6초) 그립니다. 설정이 없으면 바로 그립니다.
if (contentFromDb) {
  $main.textContent = '복지 정보를 불러오는 중이에요…';
  loadContent().finally(render);
} else render();