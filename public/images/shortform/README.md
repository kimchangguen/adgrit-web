# 숏폼 비주얼 에셋

public/ccc.png는 구도 분석에만 사용하며 화면이나 CSS에서 불러오지 않습니다.
기존 public 이미지에는 적절한 음식 장면이 없어 아래 사진풍 이미지를
내장 Imagegen 도구로 새로 생성했습니다. 실제 고객/매장 촬영 실적이 아닙니다.

| 파일 | 용도 | 크기 |
| --- | --- | --- |
| main.webp | 중앙 폰: 구운 고기 클로즈업 | 800px 폭 |
| card-01.webp | 왼쪽 뒤: 음식점 내부 | 500px 폭 |
| card-02.webp | 왼쪽 앞: 음식을 즐기는 성인 | 500px 폭 |
| card-04.webp | 오른쪽: 셰프 조리 장면 | 500px 폭 |

총 용량 약 423KB. 생성 원본은 보존하고 WebP로 최적화했습니다.
이미지에는 폰 프레임, 카피, SNS UI, 배지, 네온 효과를 포함하지 않습니다.
그 요소들은 React/CSS/SVG로 별도 구현했습니다.

## 교체
위 파일을 같은 이름의 사용 권한이 있는 장면 사진으로 교체하고 새로고침하세요.
9:16 권장, object-fit: cover / object-position: center 적용.
폰 화면은 독립 media container이므로 추후 영상 컴포넌트로 교체 가능합니다.
현재 자동재생 영상은 사용하지 않습니다.
개발 서버는 새로고침, 프로덕션 정적 출력은 재빌드가 필요합니다.
파일 누락 시 요청을 생략하며 로드 실패 시 밝은 대체 화면을 유지합니다.

## 생성 프롬프트 (built-in image_gen)
- main: Vertical 9:16 photorealistic cinematic Korean restaurant food photograph, close-up glistening thick grilled beef steaks on a black round iron plate over hot flames, chopsticks lifting one bite on upper right, orange flame and steam in background, appetizing seared textures, warm amber light, shallow depth of field. Food fills middle 70% with dim restaurant context above. A standalone photo for a short-form video screen, NO smartphone NO UI NO lettering NO logos NO collage NO borders. Do not reproduce any reference layout.
- card-01: Vertical 9:16 photorealistic Korean barbecue restaurant interior at night, warm amber pendant lamps, wood tables, dark booths, small dining details and cozy ambience, photographic editorial quality, strong visible highlights, no text no signage no people needed. Standalone single scene photo, NOT a UI or a card, no frame no phone no logos.
- card-02: Vertical 9:16 photorealistic candid food editorial photograph of an adult Korean woman in her late twenties enjoying a bite with chopsticks in a warm restaurant, eyes softly closed with an authentic pleased expression, wearing a simple terracotta blouse, bowl of Korean food visible in foreground. Natural flattering amber light, candid dining moment, background softly blurred. Single standalone photograph, no text no UI no phone no frame no watermark.
- card-04: Vertical 9:16 photorealistic restaurant short-form video still of an adult chef in dark apron cooking in a wok, vivid orange flames rising from pan in lower center, hands and cooking action clearly visible, warm dramatic kitchen light, food editorial photography, realistic smoke and stainless steel kitchen, no text no logos no frame no smartphone no UI.
