# AI 视频提示词合集

[English](README.md) | 简体中文

30 条原创 AI 视频提示词，分 6 类。每条包含英文/中文提示词、设计理由、变体和结果检查点。提示词采用 CC0，可自由使用。

> **测试状态**：标记 `Untested` 的条目尚未实际生成验证，“设计理由”是写作思路，不是实测结论。

维护者：[Everygen AI](https://everygenai.io/)，一个在浏览器里创作 AI 视频、图片和音乐的工作室。

想快速拼一条结构化提示词？试试在线的 [AI 视频提示词构建器](https://huggingface.co/spaces/everygen-ai/awesome-ai-video-prompt-builder)（纯规则、浏览器内运行、不调用 API）。

## 目录

- [竖屏短视频](#vertical-shorts) (5)
- [产品广告](#product-ads) (5)
- [AI UGC 口播](#ai-ugc) (5)
- [电影感镜头](#cinematic-shots) (5)
- [动漫/定格](#anime-stopmotion) (5)
- [自然风光](#nature-landscapes) (5)

<a id="vertical-shorts"></a>

## 竖屏短视频

### Coffee pour hook `vertical-shorts-01`

`9:16` · `5-8s` · **Untested**

```text
竖屏 9:16 特写。热浓缩咖啡倒入透明冰牛奶杯中，奶咖漩涡慢动作绽开。机位固定、略低角度。左侧温暖晨光，浅景深，深色木台面。第一秒就出现倒入动作，无文字。
```

**设计理由:** Opens on motion in frame one to earn the scroll-stop; a single subject and a static camera reduce warping in liquid.

**变体:** Swap espresso for matcha; Top-down angle instead of low angle

**结果检查:**
- [ ] Pour starts within the first second
- [ ] Liquid stays physically plausible, no glass deformation
- [ ] Vertical composition keeps the glass centered

### Street food sizzle `vertical-shorts-02`

`9:16` · `5-8s` · **Untested**

```text
竖屏 9:16 手持镜头，夜市摊位。摊主在明火烤架上翻动烤串，火星上升，烟雾映着霓虹招牌。镜头缓慢推近烤架。背景人群虚化，饱和的红与青色调，热闹氛围。
```

**设计理由:** Combines a clear action, a single camera move and a lighting palette, which are the three things most video models follow best.

**变体:** Rainy night with wet reflections; Static tripod framing

**结果检查:**
- [ ] Hands and skewers stay coherent while flipping
- [ ] Push-in is smooth
- [ ] Neon text, if any, is not required to be readable

### Before/after room reveal `vertical-shorts-03`

`9:16` · `5-8s` · **Untested**

```text
竖屏 9:16。一张堆满线缆和纸张的凌乱书桌，镜头缓慢上摇，回落时书桌变得整洁极简，有一盆绿植和一盏台灯。柔和日光，房间和窗户位置全程保持一致。
```

**设计理由:** Uses a camera tilt as a hidden transition so the change happens off-frame, a common way to make transformation clips read clearly.

**变体:** Kitchen counter version; Closet before/after

**结果检查:**
- [ ] Room layout stays consistent
- [ ] Transition hides inside the tilt
- [ ] Clean state looks clearly different

### Pet reaction close-up `vertical-shorts-04`

`9:16` · `5-8s` · **Untested**

```text
竖屏 9:16 平视特写，金毛幼犬在沙发上。画外传来玩具吱吱声，小狗先向左再向右歪头，耳朵竖起。柔和的室内午后光，温暖米色调，固定机位。
```

**设计理由:** A small, sequenced action (left then right) is easier for models than complex motion and reads instantly on a phone screen.

**变体:** Cat version with a laser dot; Add a slow push-in

**结果检查:**
- [ ] Two distinct head tilts
- [ ] Fur and eyes stay stable
- [ ] No extra limbs or warping

### Text-free tutorial step `vertical-shorts-05`

`9:16` · `5-8s` · **Untested**

```text
竖屏 9:16 俯拍，双手在白色桌面上折纸鹤。每一折都干脆利落。均匀柔光箱照明，阴影很少，中性色调，镜头固定在正上方。
```

**设计理由:** Overhead locked framing keeps hands readable and is a reliable format for how-to shorts without needing on-screen text.

**变体:** Tie a tie instead; Latte art pouring

**结果检查:**
- [ ] Fingers count looks correct
- [ ] Paper folds progress logically
- [ ] Frame remains top-down

<a id="product-ads"></a>

## 产品广告

### Perfume hero turntable `product-ads-01`

`16:9` · `5-8s` · **Untested**

```text
16:9 产品镜头。玻璃香水瓶在黑色反光转台上缓慢旋转。细轮廓光勾勒瓶身，后方飘着薄雾，光点在玻璃上流动。奢华、极简、深色背景。
```

**设计理由:** Turntable rotation is a simple, predictable motion; rim light and mist add premium cues without new objects.

**变体:** Champagne gold backdrop; Water droplets on the bottle

**结果检查:**
- [ ] Bottle shape stays constant during rotation
- [ ] Label area does not melt or morph
- [ ] Reflections look consistent

### Sneaker splash `product-ads-02`

`16:9` · `5-8s` · **Untested**

```text
16:9 慢动作。一只白色跑鞋落在浅水洼上，水花呈皇冠状向外溅开。机位贴地，日落逆光，水滴发光。干净的城市路面。
```

**设计理由:** A single impact moment with backlight emphasizes texture; ground-level angle makes the product feel heroic.

**变体:** Dust instead of water; Night with streetlight

**结果检查:**
- [ ] Shoe design stays stable
- [ ] Splash looks natural
- [ ] Slow motion is visible

### Skincare texture macro `product-ads-03`

`16:9` · `5-8s` · **Untested**

```text
16:9 微距。一滴透明精华液落在磨砂玻璃上并缓慢铺开。柔和漫射的粉彩光，粉色与奶油色调，极浅景深，安静干净的质感。
```

**设计理由:** Texture macros sell skincare without needing faces or exact branding, which models often distort.

**变体:** Cream swirl instead of serum; Add a bottle out of focus behind

**结果检查:**
- [ ] Liquid behaves like a viscous drop
- [ ] No unwanted text
- [ ] Colors stay soft and consistent

### Headphones floating `product-ads-04`

`16:9` · `5-8s` · **Untested**

```text
16:9 摄影棚镜头。头戴式耳机悬浮在空中缓慢旋转，背景从深蓝渐变到紫色。微粒轻轻漂浮，上方柔和主光，镜头缓慢环绕。
```

**设计理由:** Floating product plus gentle orbit is a classic tech-ad look and avoids hands and complex interactions.

**变体:** Smartwatch version; Bright white background

**结果检查:**
- [ ] Headband and ear cups stay attached
- [ ] Orbit is smooth
- [ ] No duplicate products appear

### Coffee bag lifestyle `product-ads-05`

`16:9` · `5-8s` · **Untested**

```text
16:9 中景。牛皮纸咖啡袋放在洒满阳光的厨房台面上，旁边是一杯冒热气的咖啡；晨光穿过百叶窗投下条纹阴影并缓慢移动。安静、温暖、自然。
```

**设计理由:** Lifestyle context with moving shadows adds life while the product itself stays still and undistorted.

**变体:** Tea tin version; Rainy window ambiance

**结果检查:**
- [ ] Bag stays still and consistent
- [ ] Steam rises naturally
- [ ] Shadow motion is slow

<a id="ai-ugc"></a>

## AI UGC 口播

### Morning routine selfie `ai-ugc-01`

`9:16` · `5-10s` · **Untested**

```text
竖屏 9:16 自拍风格。年轻女性在浴室镜前举着手机，微笑并把一小罐护肤品举向镜头，然后点头。自然的浴室光线，轻微手持晃动，真实随意的感觉，无文字。
```

**设计理由:** UGC works when it looks unpolished: handheld feel, natural light and a single simple gesture.

**变体:** Man shaving version; Outdoor balcony setting

**结果检查:**
- [ ] Face stays consistent
- [ ] Hands and jar look natural
- [ ] Feels like phone footage, not studio

### Unboxing at desk `ai-ugc-02`

`9:16` · `5-10s` · **Untested**

```text
竖屏 9:16 第一人称视角。双手在桌上打开纸箱，拿起包装纸，露出一个小音箱。温暖台灯光，随意的房间背景轻微虚化，手持拍摄。
```

**设计理由:** Point-of-view unboxing avoids face consistency issues and mirrors a familiar creator format.

**变体:** Reveal a mug; Daylight version

**结果检查:**
- [ ] Box opening sequence makes sense
- [ ] Hands have correct fingers
- [ ] Product appears clearly at end

### Talking-to-camera review `ai-ugc-03`

`9:16` · `5-10s` · **Untested**

```text
竖屏 9:16 中近景。穿连帽衫的男人坐在车里，看着手机镜头说话，眉毛表情丰富，偶尔用一只手比划。日光透过挡风玻璃，随意真诚的语气。
```

**设计理由:** Car-selfie is a high-recognition UGC setting; describing gestures instead of exact speech avoids lip-sync promises.

**变体:** Kitchen setting; Walking outdoors

**结果检查:**
- [ ] Mouth motion looks natural
- [ ] Lighting matches car interior
- [ ] No added captions unless desired

### Gym bag essentials `ai-ugc-04`

`9:16` · `5-10s` · **Untested**

```text
竖屏 9:16 俯拍。双手把物品逐一放进打开的健身包：水瓶、毛巾、耳机、鞋子。明亮自然光，木地板，节奏轻快随意。
```

**设计理由:** 'What's in my bag' list format gives a clear sequence the model can follow.

**变体:** Travel carry-on; School backpack

**结果检查:**
- [ ] Each item is distinguishable
- [ ] Items don't merge
- [ ] Order roughly follows prompt

### Recipe reaction taste `ai-ugc-05`

`9:16` · `5-10s` · **Untested**

```text
竖屏 9:16。女性在家里厨房台面前尝一口刚做好的意面，闭眼微笑，然后对镜头竖起大拇指。温暖的钨丝灯厨房光，手持拍摄，真实居家感。
```

**设计理由:** Reaction beats (bite, pause, smile, gesture) create a mini story within a short clip.

**变体:** Dessert version; Outdoor picnic

**结果检查:**
- [ ] Fork and food interaction is believable
- [ ] Thumbs-up hand is correct
- [ ] Expression change is visible

<a id="cinematic-shots"></a>

## 电影感镜头

### Desert lone rider `cinematic-shots-01`

`21:9` · `5-8s` · **Untested**

```text
21:9 大全景建立镜头。孤独骑者在金色时刻穿越广阔的橙色沙丘，长长的影子向右延伸。镜头缓慢横移。变形宽银幕镜头质感，轻微胶片颗粒，壮阔而安静。
```

**设计理由:** Scale contrast (tiny subject, vast land) plus a lateral track is a dependable cinematic formula.

**变体:** Snowfield version; Blue hour

**结果检查:**
- [ ] Horse gait looks plausible
- [ ] Horizon stays level
- [ ] Grain is subtle

### Rainy neon alley `cinematic-shots-02`

`21:9` · `5-8s` · **Untested**

```text
21:9 中景。穿风衣的女人在夜晚窄巷中朝镜头走来，雨水落下，霓虹招牌倒映在水洼里。镜头缓慢后移。青色与洋红色调，氛围感黑色电影。
```

**设计理由:** Walk-toward-camera with dolly back keeps the subject size stable, reducing drift; rain and reflections add depth.

**变体:** Umbrella added; Snow instead of rain

**结果检查:**
- [ ] Walking motion is natural
- [ ] Reflections respond to light
- [ ] Face stays consistent

### Candlelit portrait `cinematic-shots-03`

`21:9` · `5-8s` · **Untested**

```text
21:9 特写。老人的脸只被烛光照亮，火焰摇曳，他从书上缓缓抬头看向镜头。深沉阴影，暖琥珀色调，伦勃朗光，浅景深。
```

**设计理由:** Naming a known lighting style (Rembrandt) gives a compact, widely understood instruction.

**变体:** Young woman version; Lantern instead of candle

**结果检查:**
- [ ] Flicker affects skin light
- [ ] Eye line moves to camera
- [ ] Wrinkles and skin look natural

### Train window drift `cinematic-shots-04`

`21:9` · `5-8s` · **Untested**

```text
21:9 从行驶中的火车内拍摄。雨丝划过车窗，窗外乡村灯光模糊掠过，乘客的倒影隐约可见。缓慢、忧郁、冷蓝色调。
```

**设计理由:** Layered depth (drops, reflection, outside motion) produces a cinematic mood with minimal character action.

**变体:** Sunny daytime; Subway tunnel

**结果检查:**
- [ ] Outside motion is parallax-consistent
- [ ] Reflection is subtle
- [ ] Rain streaks move downward/diagonal

### Crane up city reveal `cinematic-shots-05`

`21:9` · `5-8s` · **Untested**

```text
21:9。镜头从繁忙斑马线的街面开始，平稳升起越过屋顶，展现日落时的城市天际线。温暖薄雾，鸟群掠过画面，宏大而充满希望。
```

**设计理由:** One continuous, named camera move (crane up) structures the whole clip as a reveal.

**变体:** Night skyline; Coastal town

**结果检查:**
- [ ] Move is continuous, no cuts
- [ ] Architecture stays stable
- [ ] Sunset lighting consistent

<a id="anime-stopmotion"></a>

## 动漫/定格

### Anime rooftop wind `anime-stopmotion-01`

`16:9` · `4-6s` · **Untested**

```text
日系动画风格，16:9。高中女生站在日落时的天台上，风吹动她的头发和围巾，樱花瓣飘过。手绘质感，柔和赛璐璐着色，暖色粉彩天空，镜头轻柔平移。
```

**设计理由:** Wind-driven secondary motion (hair, scarf, petals) is where anime style looks most alive.

**变体:** Rainy version; Night with city lights

**结果检查:**
- [ ] Line art stays clean
- [ ] Hair motion is fluid
- [ ] Character proportions stable

### Claymation breakfast `anime-stopmotion-02`

`16:9` · `4-6s` · **Untested**

```text
黏土定格动画，16:9。黏土荷包蛋从锅里跳到盘子上，两条培根扭动着排成笑脸。黏土上可见指纹，略带卡顿的 12fps 感，温暖的厨房布景。
```

**设计理由:** Explicitly asking for frame-rate choppiness and fingerprints tells the model to avoid overly smooth CG motion.

**变体:** Clay animals; Paper cutout style

**结果检查:**
- [ ] Clay texture visible
- [ ] Motion has stepped feel
- [ ] Final smile shape readable

### Chibi spell cast `anime-stopmotion-03`

`16:9` · `4-6s` · **Untested**

```text
Q版动画风格，16:9。小巫师角色挥动魔杖，发光的星光螺旋飞出，在头顶形成一颗星星。明亮色彩，粗轮廓线，俏皮弹跳的动作，简单的森林背景。
```

**设计理由:** Simple shapes and thick outlines keep chibi characters stable across frames.

**变体:** Fire spell; Underwater setting

**结果检查:**
- [ ] Character shape consistent
- [ ] Sparkles form a star
- [ ] Colors bright and flat

### Felt diorama town `anime-stopmotion-04`

`16:9` · `4-6s` · **Untested**

```text
毛毡与纸艺定格微缩场景，16:9。一辆小小的毛毡巴士驶过纸做的小镇，轻微晃动，上方是棉花云。移轴效果，温暖手工质感，手作魅力。
```

**设计理由:** Material words (felt, paper, cotton) plus tilt-shift strongly cue the miniature look.

**变体:** Winter snow town; Night with tiny lights

**结果检查:**
- [ ] Textures look handmade
- [ ] Bus movement slightly jittery
- [ ] Scale feels miniature

### Mecha hangar anime `anime-stopmotion-05`

`16:9` · `4-6s` · **Untested**

```text
日系动画风格，16:9。机库里的巨型机器人启动：眼睛亮起，排气口喷出蒸汽，线缆脱落。低角度镜头，戏剧化光照，细致的机械线条，90 年代动画美学。
```

**设计理由:** A clear trigger-to-effect sequence (power on → lights → steam) gives the model ordered events.

**变体:** Rainy launch pad; Small drone version

**结果检查:**
- [ ] Robot design remains stable
- [ ] Effects happen in order
- [ ] Retro anime color grading

<a id="nature-landscapes"></a>

## 自然风光

### Misty forest dawn `nature-landscapes-01`

`16:9` · `6-10s` · **Untested**

```text
16:9。黎明时阳光穿透薄雾笼罩的松林，雾气飘动，光束缓慢移动。镜头沿着苔藓小路缓慢前推。绿色与金色调，宁静自然。
```

**设计理由:** Volumetric light plus drifting fog gives motion even with a slow camera.

**变体:** Autumn birch forest; Rain shower

**结果检查:**
- [ ] Light rays look volumetric
- [ ] Trees don't warp during push
- [ ] Fog moves slowly

### Ocean cliff waves `nature-landscapes-02`

`16:9` · `6-10s` · **Untested**

```text
16:9 无人机航拍。碧绿海浪拍打黑色岩石悬崖，白色泡沫散开。无人机沿海岸线缓慢飞行。阴天柔光，壮观而清新。
```

**设计理由:** Aerial + linear path is one of the most stable landscape setups for video models.

**变体:** Sunset light; Stormy sea

**结果检查:**
- [ ] Wave motion is realistic
- [ ] Coastline consistent
- [ ] No sudden camera jumps

### Northern lights lake `nature-landscapes-03`

`16:9` · `6-10s` · **Untested**

```text
16:9 延时摄影风格。绿色和紫色极光在星空中波动，倒映在平静的高山湖面上。固定机位，松树剪影，寒冷夜晚的氛围。
```

**设计理由:** A static camera with sky motion and reflection is a reliable way to show natural phenomena.

**变体:** Snow falling; Milky Way instead

**结果检查:**
- [ ] Reflection mirrors sky
- [ ] Aurora motion is smooth
- [ ] Stars don't flicker unnaturally

### Waterfall close `nature-landscapes-04`

`16:9` · `6-10s` · **Untested**

```text
16:9。丛林瀑布近景，水流从长满苔藓的岩石上倾泻，雾气升腾，蕨类在水雾中颤动。轻微慢动作，郁郁葱葱的绿色，明亮漫射光。
```

**设计理由:** Secondary motion (ferns trembling, mist) adds realism around the main water motion.

**变体:** Frozen waterfall; Sunset backlight

**结果检查:**
- [ ] Water flow continuous
- [ ] Rocks remain solid
- [ ] Mist subtle

### Wheat field wind `nature-landscapes-05`

`16:9` · `6-10s` · **Untested**

```text
16:9 低角度。金色麦浪在夏日大天空下摇曳，云朵缓慢移动。镜头缓缓滑过麦穗顶端。温暖的午后阳光，怀旧氛围。
```

**设计理由:** Wind patterns across a field are visually clear and forgiving of small errors.

**变体:** Lavender field; Storm approaching

**结果检查:**
- [ ] Wind waves travel across field
- [ ] Clouds move slowly
- [ ] Camera glide smooth

## 参与贡献

见 [CONTRIBUTING.md](CONTRIBUTING.md) 与 [docs/prompt-structure.md](docs/prompt-structure.md)。

## 许可

提示词：CC0 1.0（LICENSE-CONTENT）；代码：MIT（LICENSE-CODE）。
