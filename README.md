# Awesome AI Video Prompts

English | [简体中文](README.zh-CN.md)

30 original AI video prompts in 6 categories. Each entry has an English and Chinese prompt, why it works, variations and a result checklist. Prompts are CC0.

> **Test status:** entries marked `Untested` have not been generated yet. "Why it works" explains the design intent, not a measured result.

Maintained by [Everygen AI](https://everygenai.io/), a browser studio for AI video, image and music creation.

Want to assemble your own? Try the rule-based [AI Video Prompt Builder on Hugging Face](https://huggingface.co/spaces/everygen-ai/awesome-ai-video-prompt-builder) (runs in your browser, no API).

## Contents

- [Vertical Shorts](#vertical-shorts) (5)
- [Product Ads](#product-ads) (5)
- [AI UGC](#ai-ugc) (5)
- [Cinematic Shots](#cinematic-shots) (5)
- [Anime & Stop-motion](#anime-stopmotion) (5)
- [Nature & Landscapes](#nature-landscapes) (5)

<a id="vertical-shorts"></a>

## Vertical Shorts

### Coffee pour hook `vertical-shorts-01`

`9:16` · `5-8s` · **Untested**

```text
Vertical 9:16 close-up. Hot espresso pours into a clear glass of iced milk, creamy swirls blooming in slow motion. Camera static, slightly low angle. Warm morning window light from the left, shallow depth of field, dark wooden counter. First second already shows the pour; no text.
```

<details><summary>中文</summary>

```text
竖屏 9:16 特写。热浓缩咖啡倒入透明冰牛奶杯中，奶咖漩涡慢动作绽开。机位固定、略低角度。左侧温暖晨光，浅景深，深色木台面。第一秒就出现倒入动作，无文字。
```

</details>

**Why it works:** Opens on motion in frame one to earn the scroll-stop; a single subject and a static camera reduce warping in liquid.

**Variations:** Swap espresso for matcha; Top-down angle instead of low angle

**Result check:**
- [ ] Pour starts within the first second
- [ ] Liquid stays physically plausible, no glass deformation
- [ ] Vertical composition keeps the glass centered

### Street food sizzle `vertical-shorts-02`

`9:16` · `5-8s` · **Untested**

```text
Vertical 9:16 handheld shot at a night market stall. A cook flips skewers on a flaming grill, sparks rising, smoke catching neon signs. Camera slowly pushes in toward the grill. Bokeh crowd in background, saturated reds and teal, energetic mood.
```

<details><summary>中文</summary>

```text
竖屏 9:16 手持镜头，夜市摊位。摊主在明火烤架上翻动烤串，火星上升，烟雾映着霓虹招牌。镜头缓慢推近烤架。背景人群虚化，饱和的红与青色调，热闹氛围。
```

</details>

**Why it works:** Combines a clear action, a single camera move and a lighting palette, which are the three things most video models follow best.

**Variations:** Rainy night with wet reflections; Static tripod framing

**Result check:**
- [ ] Hands and skewers stay coherent while flipping
- [ ] Push-in is smooth
- [ ] Neon text, if any, is not required to be readable

### Before/after room reveal `vertical-shorts-03`

`9:16` · `5-8s` · **Untested**

```text
Vertical 9:16. A messy desk covered in cables and papers; camera tilts up slowly, and as it returns down the desk is clean and minimal with a plant and a lamp. Soft daylight, consistent room and window position throughout.
```

<details><summary>中文</summary>

```text
竖屏 9:16。一张堆满线缆和纸张的凌乱书桌，镜头缓慢上摇，回落时书桌变得整洁极简，有一盆绿植和一盏台灯。柔和日光，房间和窗户位置全程保持一致。
```

</details>

**Why it works:** Uses a camera tilt as a hidden transition so the change happens off-frame, a common way to make transformation clips read clearly.

**Variations:** Kitchen counter version; Closet before/after

**Result check:**
- [ ] Room layout stays consistent
- [ ] Transition hides inside the tilt
- [ ] Clean state looks clearly different

### Pet reaction close-up `vertical-shorts-04`

`9:16` · `5-8s` · **Untested**

```text
Vertical 9:16 eye-level close-up of a golden retriever puppy on a sofa. Off-screen a squeaky toy sounds; the puppy tilts its head left, then right, ears perking up. Soft indoor afternoon light, cozy beige tones, static camera.
```

<details><summary>中文</summary>

```text
竖屏 9:16 平视特写，金毛幼犬在沙发上。画外传来玩具吱吱声，小狗先向左再向右歪头，耳朵竖起。柔和的室内午后光，温暖米色调，固定机位。
```

</details>

**Why it works:** A small, sequenced action (left then right) is easier for models than complex motion and reads instantly on a phone screen.

**Variations:** Cat version with a laser dot; Add a slow push-in

**Result check:**
- [ ] Two distinct head tilts
- [ ] Fur and eyes stay stable
- [ ] No extra limbs or warping

### Text-free tutorial step `vertical-shorts-05`

`9:16` · `5-8s` · **Untested**

```text
Vertical 9:16 top-down shot of hands folding a paper crane on a white table. Each fold is crisp and deliberate. Even soft-box lighting, minimal shadows, neutral colors, camera locked overhead.
```

<details><summary>中文</summary>

```text
竖屏 9:16 俯拍，双手在白色桌面上折纸鹤。每一折都干脆利落。均匀柔光箱照明，阴影很少，中性色调，镜头固定在正上方。
```

</details>

**Why it works:** Overhead locked framing keeps hands readable and is a reliable format for how-to shorts without needing on-screen text.

**Variations:** Tie a tie instead; Latte art pouring

**Result check:**
- [ ] Fingers count looks correct
- [ ] Paper folds progress logically
- [ ] Frame remains top-down

<a id="product-ads"></a>

## Product Ads

### Perfume hero turntable `product-ads-01`

`16:9` · `5-8s` · **Untested**

```text
16:9 product shot. A glass perfume bottle rotates slowly on a black reflective turntable. A thin rim light outlines the bottle, soft mist drifts behind it, small light glints travel across the glass. Luxury, minimal, dark background.
```

<details><summary>中文</summary>

```text
16:9 产品镜头。玻璃香水瓶在黑色反光转台上缓慢旋转。细轮廓光勾勒瓶身，后方飘着薄雾，光点在玻璃上流动。奢华、极简、深色背景。
```

</details>

**Why it works:** Turntable rotation is a simple, predictable motion; rim light and mist add premium cues without new objects.

**Variations:** Champagne gold backdrop; Water droplets on the bottle

**Result check:**
- [ ] Bottle shape stays constant during rotation
- [ ] Label area does not melt or morph
- [ ] Reflections look consistent

### Sneaker splash `product-ads-02`

`16:9` · `5-8s` · **Untested**

```text
16:9 slow-motion shot. A white running sneaker lands on a shallow puddle, water splashing outward in a crown shape. Low camera at ground level, backlit by sunset, droplets glowing. Clean urban pavement.
```

<details><summary>中文</summary>

```text
16:9 慢动作。一只白色跑鞋落在浅水洼上，水花呈皇冠状向外溅开。机位贴地，日落逆光，水滴发光。干净的城市路面。
```

</details>

**Why it works:** A single impact moment with backlight emphasizes texture; ground-level angle makes the product feel heroic.

**Variations:** Dust instead of water; Night with streetlight

**Result check:**
- [ ] Shoe design stays stable
- [ ] Splash looks natural
- [ ] Slow motion is visible

### Skincare texture macro `product-ads-03`

`16:9` · `5-8s` · **Untested**

```text
16:9 macro shot. A drop of clear serum falls onto a frosted glass surface and spreads slowly. Soft diffused pastel light, pink and cream tones, very shallow depth of field, calm clinical aesthetic.
```

<details><summary>中文</summary>

```text
16:9 微距。一滴透明精华液落在磨砂玻璃上并缓慢铺开。柔和漫射的粉彩光，粉色与奶油色调，极浅景深，安静干净的质感。
```

</details>

**Why it works:** Texture macros sell skincare without needing faces or exact branding, which models often distort.

**Variations:** Cream swirl instead of serum; Add a bottle out of focus behind

**Result check:**
- [ ] Liquid behaves like a viscous drop
- [ ] No unwanted text
- [ ] Colors stay soft and consistent

### Headphones floating `product-ads-04`

`16:9` · `5-8s` · **Untested**

```text
16:9 studio shot. Over-ear headphones float and rotate slowly in mid-air against a gradient background from deep blue to violet. Subtle particles drift; soft key light from above; camera slowly orbits.
```

<details><summary>中文</summary>

```text
16:9 摄影棚镜头。头戴式耳机悬浮在空中缓慢旋转，背景从深蓝渐变到紫色。微粒轻轻漂浮，上方柔和主光，镜头缓慢环绕。
```

</details>

**Why it works:** Floating product plus gentle orbit is a classic tech-ad look and avoids hands and complex interactions.

**Variations:** Smartwatch version; Bright white background

**Result check:**
- [ ] Headband and ear cups stay attached
- [ ] Orbit is smooth
- [ ] No duplicate products appear

### Coffee bag lifestyle `product-ads-05`

`16:9` · `5-8s` · **Untested**

```text
16:9 medium shot. A kraft paper coffee bag sits on a sunlit kitchen counter next to a steaming mug; morning light streams through blinds, casting striped shadows that slowly move. Calm, warm, natural.
```

<details><summary>中文</summary>

```text
16:9 中景。牛皮纸咖啡袋放在洒满阳光的厨房台面上，旁边是一杯冒热气的咖啡；晨光穿过百叶窗投下条纹阴影并缓慢移动。安静、温暖、自然。
```

</details>

**Why it works:** Lifestyle context with moving shadows adds life while the product itself stays still and undistorted.

**Variations:** Tea tin version; Rainy window ambiance

**Result check:**
- [ ] Bag stays still and consistent
- [ ] Steam rises naturally
- [ ] Shadow motion is slow

<a id="ai-ugc"></a>

## AI UGC

### Morning routine selfie `ai-ugc-01`

`9:16` · `5-10s` · **Untested**

```text
Vertical 9:16 selfie-style video. A young woman in a bathroom mirror holds her phone, smiles and lifts a small skincare jar toward the camera, then nods. Natural bathroom light, slightly handheld, authentic casual feel, no text.
```

<details><summary>中文</summary>

```text
竖屏 9:16 自拍风格。年轻女性在浴室镜前举着手机，微笑并把一小罐护肤品举向镜头，然后点头。自然的浴室光线，轻微手持晃动，真实随意的感觉，无文字。
```

</details>

**Why it works:** UGC works when it looks unpolished: handheld feel, natural light and a single simple gesture.

**Variations:** Man shaving version; Outdoor balcony setting

**Result check:**
- [ ] Face stays consistent
- [ ] Hands and jar look natural
- [ ] Feels like phone footage, not studio

### Unboxing at desk `ai-ugc-02`

`9:16` · `5-10s` · **Untested**

```text
Vertical 9:16 first-person view. Hands open a cardboard box on a desk, lift out tissue paper and reveal a small speaker. Warm desk lamp light, casual room background slightly blurred, handheld.
```

<details><summary>中文</summary>

```text
竖屏 9:16 第一人称视角。双手在桌上打开纸箱，拿起包装纸，露出一个小音箱。温暖台灯光，随意的房间背景轻微虚化，手持拍摄。
```

</details>

**Why it works:** Point-of-view unboxing avoids face consistency issues and mirrors a familiar creator format.

**Variations:** Reveal a mug; Daylight version

**Result check:**
- [ ] Box opening sequence makes sense
- [ ] Hands have correct fingers
- [ ] Product appears clearly at end

### Talking-to-camera review `ai-ugc-03`

`9:16` · `5-10s` · **Untested**

```text
Vertical 9:16 medium close-up. A man in a hoodie sits in his car, looks into the phone camera and talks with expressive eyebrows, occasionally gesturing with one hand. Daylight through windshield, casual and honest tone.
```

<details><summary>中文</summary>

```text
竖屏 9:16 中近景。穿连帽衫的男人坐在车里，看着手机镜头说话，眉毛表情丰富，偶尔用一只手比划。日光透过挡风玻璃，随意真诚的语气。
```

</details>

**Why it works:** Car-selfie is a high-recognition UGC setting; describing gestures instead of exact speech avoids lip-sync promises.

**Variations:** Kitchen setting; Walking outdoors

**Result check:**
- [ ] Mouth motion looks natural
- [ ] Lighting matches car interior
- [ ] No added captions unless desired

### Gym bag essentials `ai-ugc-04`

`9:16` · `5-10s` · **Untested**

```text
Vertical 9:16 top-down. Hands place items one by one into an open gym bag: water bottle, towel, headphones, shoes. Bright natural light, wooden floor, quick casual pace.
```

<details><summary>中文</summary>

```text
竖屏 9:16 俯拍。双手把物品逐一放进打开的健身包：水瓶、毛巾、耳机、鞋子。明亮自然光，木地板，节奏轻快随意。
```

</details>

**Why it works:** 'What's in my bag' list format gives a clear sequence the model can follow.

**Variations:** Travel carry-on; School backpack

**Result check:**
- [ ] Each item is distinguishable
- [ ] Items don't merge
- [ ] Order roughly follows prompt

### Recipe reaction taste `ai-ugc-05`

`9:16` · `5-10s` · **Untested**

```text
Vertical 9:16. A woman at a home kitchen counter takes a bite of a freshly made pasta, closes her eyes and smiles, then gives a thumbs-up to the camera. Warm tungsten kitchen light, handheld, real home feel.
```

<details><summary>中文</summary>

```text
竖屏 9:16。女性在家里厨房台面前尝一口刚做好的意面，闭眼微笑，然后对镜头竖起大拇指。温暖的钨丝灯厨房光，手持拍摄，真实居家感。
```

</details>

**Why it works:** Reaction beats (bite, pause, smile, gesture) create a mini story within a short clip.

**Variations:** Dessert version; Outdoor picnic

**Result check:**
- [ ] Fork and food interaction is believable
- [ ] Thumbs-up hand is correct
- [ ] Expression change is visible

<a id="cinematic-shots"></a>

## Cinematic Shots

### Desert lone rider `cinematic-shots-01`

`21:9` · `5-8s` · **Untested**

```text
21:9 wide establishing shot. A lone rider on horseback crosses vast orange sand dunes at golden hour, long shadow stretching to the right. Camera slowly tracks sideways. Anamorphic lens look, subtle film grain, epic and quiet.
```

<details><summary>中文</summary>

```text
21:9 大全景建立镜头。孤独骑者在金色时刻穿越广阔的橙色沙丘，长长的影子向右延伸。镜头缓慢横移。变形宽银幕镜头质感，轻微胶片颗粒，壮阔而安静。
```

</details>

**Why it works:** Scale contrast (tiny subject, vast land) plus a lateral track is a dependable cinematic formula.

**Variations:** Snowfield version; Blue hour

**Result check:**
- [ ] Horse gait looks plausible
- [ ] Horizon stays level
- [ ] Grain is subtle

### Rainy neon alley `cinematic-shots-02`

`21:9` · `5-8s` · **Untested**

```text
21:9 medium shot. A woman in a trench coat walks toward camera through a narrow alley at night, rain falling, neon signs reflecting in puddles. Camera slowly dollies backward. Teal and magenta palette, moody noir.
```

<details><summary>中文</summary>

```text
21:9 中景。穿风衣的女人在夜晚窄巷中朝镜头走来，雨水落下，霓虹招牌倒映在水洼里。镜头缓慢后移。青色与洋红色调，氛围感黑色电影。
```

</details>

**Why it works:** Walk-toward-camera with dolly back keeps the subject size stable, reducing drift; rain and reflections add depth.

**Variations:** Umbrella added; Snow instead of rain

**Result check:**
- [ ] Walking motion is natural
- [ ] Reflections respond to light
- [ ] Face stays consistent

### Candlelit portrait `cinematic-shots-03`

`21:9` · `5-8s` · **Untested**

```text
21:9 close-up. An old man's face lit only by a candle, flame flickering, he slowly looks up from a book toward the camera. Deep shadows, warm amber tones, Rembrandt lighting, shallow depth of field.
```

<details><summary>中文</summary>

```text
21:9 特写。老人的脸只被烛光照亮，火焰摇曳，他从书上缓缓抬头看向镜头。深沉阴影，暖琥珀色调，伦勃朗光，浅景深。
```

</details>

**Why it works:** Naming a known lighting style (Rembrandt) gives a compact, widely understood instruction.

**Variations:** Young woman version; Lantern instead of candle

**Result check:**
- [ ] Flicker affects skin light
- [ ] Eye line moves to camera
- [ ] Wrinkles and skin look natural

### Train window drift `cinematic-shots-04`

`21:9` · `5-8s` · **Untested**

```text
21:9 shot from inside a moving train. Rain streaks on the window, countryside lights blur past outside, a passenger's reflection faintly visible. Slow, melancholic, cool blue tones.
```

<details><summary>中文</summary>

```text
21:9 从行驶中的火车内拍摄。雨丝划过车窗，窗外乡村灯光模糊掠过，乘客的倒影隐约可见。缓慢、忧郁、冷蓝色调。
```

</details>

**Why it works:** Layered depth (drops, reflection, outside motion) produces a cinematic mood with minimal character action.

**Variations:** Sunny daytime; Subway tunnel

**Result check:**
- [ ] Outside motion is parallax-consistent
- [ ] Reflection is subtle
- [ ] Rain streaks move downward/diagonal

### Crane up city reveal `cinematic-shots-05`

`21:9` · `5-8s` · **Untested**

```text
21:9. Camera starts at street level on a busy crosswalk, then cranes up smoothly over rooftops revealing a city skyline at sunset. Warm haze, birds crossing frame, grand and hopeful.
```

<details><summary>中文</summary>

```text
21:9。镜头从繁忙斑马线的街面开始，平稳升起越过屋顶，展现日落时的城市天际线。温暖薄雾，鸟群掠过画面，宏大而充满希望。
```

</details>

**Why it works:** One continuous, named camera move (crane up) structures the whole clip as a reveal.

**Variations:** Night skyline; Coastal town

**Result check:**
- [ ] Move is continuous, no cuts
- [ ] Architecture stays stable
- [ ] Sunset lighting consistent

<a id="anime-stopmotion"></a>

## Anime & Stop-motion

### Anime rooftop wind `anime-stopmotion-01`

`16:9` · `4-6s` · **Untested**

```text
Anime style, 16:9. A high school girl stands on a rooftop at sunset, wind blowing her hair and scarf, cherry petals drifting past. Hand-drawn look, soft cel shading, warm pastel sky, gentle camera pan.
```

<details><summary>中文</summary>

```text
日系动画风格，16:9。高中女生站在日落时的天台上，风吹动她的头发和围巾，樱花瓣飘过。手绘质感，柔和赛璐璐着色，暖色粉彩天空，镜头轻柔平移。
```

</details>

**Why it works:** Wind-driven secondary motion (hair, scarf, petals) is where anime style looks most alive.

**Variations:** Rainy version; Night with city lights

**Result check:**
- [ ] Line art stays clean
- [ ] Hair motion is fluid
- [ ] Character proportions stable

### Claymation breakfast `anime-stopmotion-02`

`16:9` · `4-6s` · **Untested**

```text
Stop-motion claymation, 16:9. A clay fried egg hops out of a pan onto a plate, followed by two strips of bacon that wiggle into a smile shape. Visible fingerprints on clay, slightly choppy 12fps feel, warm kitchen set.
```

<details><summary>中文</summary>

```text
黏土定格动画，16:9。黏土荷包蛋从锅里跳到盘子上，两条培根扭动着排成笑脸。黏土上可见指纹，略带卡顿的 12fps 感，温暖的厨房布景。
```

</details>

**Why it works:** Explicitly asking for frame-rate choppiness and fingerprints tells the model to avoid overly smooth CG motion.

**Variations:** Clay animals; Paper cutout style

**Result check:**
- [ ] Clay texture visible
- [ ] Motion has stepped feel
- [ ] Final smile shape readable

### Chibi spell cast `anime-stopmotion-03`

`16:9` · `4-6s` · **Untested**

```text
Anime chibi style, 16:9. A small wizard character waves a wand, glowing sparkles spiral out and form a star above its head. Bright colors, thick outlines, playful bouncy motion, simple forest background.
```

<details><summary>中文</summary>

```text
Q版动画风格，16:9。小巫师角色挥动魔杖，发光的星光螺旋飞出，在头顶形成一颗星星。明亮色彩，粗轮廓线，俏皮弹跳的动作，简单的森林背景。
```

</details>

**Why it works:** Simple shapes and thick outlines keep chibi characters stable across frames.

**Variations:** Fire spell; Underwater setting

**Result check:**
- [ ] Character shape consistent
- [ ] Sparkles form a star
- [ ] Colors bright and flat

### Felt diorama town `anime-stopmotion-04`

`16:9` · `4-6s` · **Untested**

```text
Stop-motion felt and paper diorama, 16:9. A tiny felt bus drives through a paper town, wobbling slightly, cotton clouds above. Tilt-shift look, warm craft textures, handmade charm.
```

<details><summary>中文</summary>

```text
毛毡与纸艺定格微缩场景，16:9。一辆小小的毛毡巴士驶过纸做的小镇，轻微晃动，上方是棉花云。移轴效果，温暖手工质感，手作魅力。
```

</details>

**Why it works:** Material words (felt, paper, cotton) plus tilt-shift strongly cue the miniature look.

**Variations:** Winter snow town; Night with tiny lights

**Result check:**
- [ ] Textures look handmade
- [ ] Bus movement slightly jittery
- [ ] Scale feels miniature

### Mecha hangar anime `anime-stopmotion-05`

`16:9` · `4-6s` · **Untested**

```text
Anime style, 16:9. A giant robot in a hangar powers on: eyes light up, steam vents hiss, cables drop away. Low angle camera, dramatic lighting, detailed mechanical lines, 90s anime aesthetic.
```

<details><summary>中文</summary>

```text
日系动画风格，16:9。机库里的巨型机器人启动：眼睛亮起，排气口喷出蒸汽，线缆脱落。低角度镜头，戏剧化光照，细致的机械线条，90 年代动画美学。
```

</details>

**Why it works:** A clear trigger-to-effect sequence (power on → lights → steam) gives the model ordered events.

**Variations:** Rainy launch pad; Small drone version

**Result check:**
- [ ] Robot design remains stable
- [ ] Effects happen in order
- [ ] Retro anime color grading

<a id="nature-landscapes"></a>

## Nature & Landscapes

### Misty forest dawn `nature-landscapes-01`

`16:9` · `6-10s` · **Untested**

```text
16:9. Sunbeams break through a misty pine forest at dawn, light rays moving slowly as fog drifts. Camera slowly pushes forward along a moss path. Green and gold tones, peaceful, natural.
```

<details><summary>中文</summary>

```text
16:9。黎明时阳光穿透薄雾笼罩的松林，雾气飘动，光束缓慢移动。镜头沿着苔藓小路缓慢前推。绿色与金色调，宁静自然。
```

</details>

**Why it works:** Volumetric light plus drifting fog gives motion even with a slow camera.

**Variations:** Autumn birch forest; Rain shower

**Result check:**
- [ ] Light rays look volumetric
- [ ] Trees don't warp during push
- [ ] Fog moves slowly

### Ocean cliff waves `nature-landscapes-02`

`16:9` · `6-10s` · **Untested**

```text
16:9 aerial drone shot. Turquoise waves crash against dark rocky cliffs, white foam spreading. Drone slowly flies along the coastline. Overcast soft light, dramatic and fresh.
```

<details><summary>中文</summary>

```text
16:9 无人机航拍。碧绿海浪拍打黑色岩石悬崖，白色泡沫散开。无人机沿海岸线缓慢飞行。阴天柔光，壮观而清新。
```

</details>

**Why it works:** Aerial + linear path is one of the most stable landscape setups for video models.

**Variations:** Sunset light; Stormy sea

**Result check:**
- [ ] Wave motion is realistic
- [ ] Coastline consistent
- [ ] No sudden camera jumps

### Northern lights lake `nature-landscapes-03`

`16:9` · `6-10s` · **Untested**

```text
16:9 time-lapse style. Green and purple aurora ripple across a starry sky above a still mountain lake, reflected in the water. Static camera, silhouetted pines, cold night atmosphere.
```

<details><summary>中文</summary>

```text
16:9 延时摄影风格。绿色和紫色极光在星空中波动，倒映在平静的高山湖面上。固定机位，松树剪影，寒冷夜晚的氛围。
```

</details>

**Why it works:** A static camera with sky motion and reflection is a reliable way to show natural phenomena.

**Variations:** Snow falling; Milky Way instead

**Result check:**
- [ ] Reflection mirrors sky
- [ ] Aurora motion is smooth
- [ ] Stars don't flicker unnaturally

### Waterfall close `nature-landscapes-04`

`16:9` · `6-10s` · **Untested**

```text
16:9. Close view of a jungle waterfall, water cascading over mossy rocks, mist rising, ferns trembling in the spray. Slight slow motion, lush green, bright diffused light.
```

<details><summary>中文</summary>

```text
16:9。丛林瀑布近景，水流从长满苔藓的岩石上倾泻，雾气升腾，蕨类在水雾中颤动。轻微慢动作，郁郁葱葱的绿色，明亮漫射光。
```

</details>

**Why it works:** Secondary motion (ferns trembling, mist) adds realism around the main water motion.

**Variations:** Frozen waterfall; Sunset backlight

**Result check:**
- [ ] Water flow continuous
- [ ] Rocks remain solid
- [ ] Mist subtle

### Wheat field wind `nature-landscapes-05`

`16:9` · `6-10s` · **Untested**

```text
16:9 low angle. Golden wheat sways in waves under a big summer sky with slow-moving clouds. Camera slowly glides through the wheat tops. Warm late-afternoon sun, nostalgic mood.
```

<details><summary>中文</summary>

```text
16:9 低角度。金色麦浪在夏日大天空下摇曳，云朵缓慢移动。镜头缓缓滑过麦穗顶端。温暖的午后阳光，怀旧氛围。
```

</details>

**Why it works:** Wind patterns across a field are visually clear and forgiving of small errors.

**Variations:** Lavender field; Storm approaching

**Result check:**
- [ ] Wind waves travel across field
- [ ] Clouds move slowly
- [ ] Camera glide smooth

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) and [docs/prompt-structure.md](docs/prompt-structure.md).

## License

Prompts: CC0 1.0 (LICENSE-CONTENT). Code: MIT (LICENSE-CODE).
