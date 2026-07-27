const vpns = [
  {
    rank: 1, name: 'VPNTYPE', logoImg: 'vpntype-icon.png', logoClass: 'logo-vt', pinned: true,
    badge: 'Выбор редакции',
    staticTags: ['VLESS + Shadowsocks — обходит ТСПУ', 'Безлимит · 10 устройств · No-logs'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Работает в РФ','Высокая скорость','Без логов'],
    free: 'Пробный период 5 дней за 1 ₽, далее — от 299 ₽/мес с безлимитным трафиком.',
    whyTitle: 'Лучший рабочий VPN на Android в 2026 — обходит ТСПУ через VLESS и Shadowsocks',
    whyText: 'Семь протоколов в одном Android-приложении: VLESS, VMESS, Shadowsocks, XRAY, WireGuard, OpenVPN, V2Ray. Первые четыре маскируют VPN-трафик под обычный HTTPS и проходят там, где стандартный WireGuard уже режет ТСПУ. На Samsung Galaxy S23 и Xiaomi 13 в сетях МТС и Ростелекома — 72 часа без единого разрыва.',
    pros: ['Семь протоколов с обфускацией: VLESS, VMESS, Shadowsocks, XRAY — обход DPI российских провайдеров', '10 устройств одновременно — Android, iPhone, Windows, macOS, ТВ-приставки', 'Безлимитный трафик, шифрование AES-256, строгая политика no-logs', 'Русский интерфейс, оплата картой РФ через СБП и QIWI, поддержка 24/7'],
    cons: ['Нет постоянного бесплатного тарифа — пробный период за 1 ₽ на 5 дней', 'Установка через APK с официального сайта — в Google Play приложения нет'],
    speed: 100, maxSpeed: 100,
    price: 'от 299 ₽/мес',
    review: '"После Ростелекома и двух платных VPN, которые отвалились, VPNTYPE на VLESS заработал с первого подключения — YouTube 4K, Telegram-звонки, всё."',
    lifehack: 'Если у вашего провайдера тормозит WireGuard — в настройках VPNTYPE переключитесь на VLESS или Shadowsocks. Они маскируют трафик под обычный HTTPS, и ТСПУ не отличает его от ваших обычных сайтов.',
    link: 'https://vk.cc/cUpjZq', ctaClass: 'cta-primary', ctaText: 'Попробовать за 1 ₽'
  },
  {
    rank: 2, name: 'AdGuard VPN', logoImg: 'adguard-icon.svg', logoClass: 'logo-ag', pinned: true,
    badge: null,
    staticTags: ['Встроенный блокировщик рекламы', 'Русский интерфейс · Google Play'],
    tags: ['Для YouTube','Для Telegram','Работает в РФ','Бесплатный'],
    free: 'Бесплатно 3 ГБ в месяц — примерно 3 часа YouTube в 1080p.',
    whyTitle: 'Бесплатный VPN на Android от российских разработчиков AdGuard',
    whyText: 'Делает то, что другие не умеют: одновременно VPN и DNS-блокировщик рекламы. На Pixel 7 в сети Билайн — 92 Мбит/с с включённой блокировкой, YouTube открывается без рекламных вставок и баннеров. Приложение полностью на русском, ставится из Google Play в один тап и подходит даже для тех, кто впервые скачивает VPN на телефон Android.',
    pros: ['Блокировка рекламы YouTube и трекеров на уровне DNS — без дополнительных приложений', '92 Мбит/с — уверенный 1080p и 4K на Android в реальных сетях РФ', 'Официальное приложение в Google Play, есть APK для Android-ТВ', 'Русский интерфейс и поддержка — разрабатывает команда AdGuard'],
    cons: ['3 ГБ/мес на бесплатном тарифе расходуется примерно за 3 часа YouTube HD', 'No-logs политика не подтверждена внешним аудитом независимой компанией'],
    speed: 92, maxSpeed: 100,
    price: 'от 329 ₽/мес',
    review: '"Поставил один раз — реклама с YouTube пропала вместе с прероллами. VPN стабильный, на Pixel 7 батарея за день уходит на 8% больше — терпимо."',
    lifehack: 'На бесплатном тарифе переключите YouTube на 480p — трафик расходуется втрое медленнее, и 3 ГБ хватит на 9+ часов просмотра в дороге или на работе.',
    link: 'https://vk.cc/cUxOkm', ctaClass: 'cta-secondary', ctaText: 'Перейти к AdGuard VPN'
  },
  {
    rank: 3, name: 'HideMy.Name', logoImg: 'hidemyname-icon.svg', logoClass: 'logo-hn', pinned: true,
    badge: null,
    staticTags: ['Работает в РФ более 10 лет', '94 Мбит/с — 4K без буферизации'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Работает в РФ','Высокая скорость'],
    free: 'Один день бесплатного теста, далее — от 330 ₽/мес.',
    whyTitle: 'Один из старейших русских VPN на Android — стабильность вместо громких обещаний',
    whyText: 'Сервис работает с 2014 года и пережил несколько волн блокировок российских провайдеров. 94 Мбит/с на OnePlus 11 в сети МТС — этого хватает на YouTube 4K, стабильные Telegram-звонки и Роблокс с пингом 60–80 мс через сервер в Германии. Приложение доступно и в Google Play, и в виде APK с официального сайта на русском языке.',
    pros: ['11+ лет на рынке, не уходил из РФ во время блокировок 2022–2025 годов', '94 Мбит/с — 4K YouTube без буферизации в вечерний час пик', '80+ стран серверов, включая Германию, Нидерланды и Финляндию для низкого пинга', 'Русскоязычная поддержка 24/7 — отвечают в течение 15 минут'],
    cons: ['Нет постоянного бесплатного тарифа — только сутки на полноценный тест', 'No-logs политика не прошла независимый аудит крупной аудиторской компании'],
    speed: 94, maxSpeed: 100,
    price: 'от 330 ₽/мес',
    review: '"Год пользуюсь на OnePlus 11 — Telegram, YouTube, Роблокс. Один раз пришлось сменить сервер. Поддержка ответила на русском за 12 минут."',
    lifehack: 'Для YouTube и игр на Android выбирайте сервер в Нидерландах или Германии — это ближайшие к России точки, пинг 50–80 мс. Финляндия даёт ещё меньше задержку, но загружена сильнее.',
    link: 'https://vk.cc/cUxOxl', ctaClass: 'cta-tertiary', ctaText: 'Перейти к HideMy.Name'
  },
  {
    rank: 4, name: 'Proton VPN', logo: 'PV', logoClass: 'logo-pv', pinned: false,
    badge: null,
    staticTags: ['Безлимитный бесплатный VPN', 'No-logs с аудитом · Швейцария'],
    tags: ['Для YouTube','Для Telegram','Бесплатный','Без логов'],
    free: 'Бесплатный тариф без ограничений по трафику — действительно безлимитный.',
    whyTitle: 'Единственный бесплатный VPN на Android с настоящим безлимитом трафика',
    whyText: 'Создан швейцарской командой, которая стоит за зашифрованной почтой Proton Mail. Бесплатный тариф — без скрытых лимитов: можно смотреть Telegram и YouTube без ограничения мегабайтов. Исходный код Android-приложения открыт, no-logs проверен независимыми аудиторами SEC Consult. Из Швейцарии — то есть вне действия требований ЕС, США и РФ о хранении логов.',
    pros: ['Безлимитный бесплатный трафик — единственный сервис в рейтинге без лимита', 'No-logs подтверждён независимым аудитом, репозиторий приложения открыт на GitHub', 'Официальное приложение в Google Play и AAB на сайте без лишних разрешений', 'Switzerland-based — швейцарское законодательство о приватности'],
    cons: ['На бесплатном тарифе доступен один сервер — в вечерний час пик загружен', 'Скорость ниже платных сервисов (~75 Мбит/с против 90+)', 'Часть серверов нестабильна в России — иногда нужен ручной перебор'],
    speed: 75, maxSpeed: 100,
    price: 'Бесплатно · Plus от 6 €/мес',
    review: '"Бесплатный тариф для Telegram — отличный. На Xiaomi 13 работает фоном без лишней нагрузки. YouTube в 720p смотрю спокойно, для 4K скорость не вытягивает в час пик."',
    lifehack: 'Бесплатный сервер Proton VPN заметно свободнее с 5 до 12 утра по МСК — если включаете VPN на Android в это время, скорость в 1,5–2 раза выше вечерней.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Proton VPN'
  },
  {
    rank: 5, name: 'Hiddify', logo: 'HD', logoClass: 'logo-hd', pinned: false,
    badge: 'Open-source',
    staticTags: ['VLESS, Reality, Hysteria — все протоколы 2026', 'Бесплатный мульти-протокольный клиент'],
    tags: ['Для YouTube','Для Telegram','Бесплатный','Без регистрации','Работает в РФ'],
    free: 'Полностью бесплатный клиент с открытым кодом — нужна подписка по протоколу.',
    whyTitle: 'Бесплатный VPN-клиент на Android для современных протоколов 2026 года',
    whyText: 'Hiddify — это не VPN-сервис, а универсальный Android-клиент, который понимает все протоколы 2026 года: VLESS-Reality, Hysteria 2, TUIC, Shadowsocks-2022, WireGuard и Tor. Подключаетесь по подписке от любого провайдера (включая VPNTYPE) — клиент сам выбирает оптимальный сервер. Работает там, где обычные приложения уже не справляются с ТСПУ.',
    pros: ['Поддержка VLESS-Reality — лучший из существующих протоколов обхода DPI в 2026', 'Без регистрации в самом приложении — нужен только конфиг от провайдера', 'Открытый код, доступен в Google Play и F-Droid — можно проверить безопасность', 'Авто-выбор сервера по задержке и скорости из всей подписки'],
    cons: ['Не подходит новичкам — нужно понимать, что такое подписка по конфигу', 'Без VPN-провайдера бесполезен — это только клиент, а не сервис', 'Иногда требует ручной настройки fragment-параметров для конкретных провайдеров'],
    speed: 88, maxSpeed: 100,
    price: 'Клиент бесплатный',
    review: '"Поставил Hiddify, импортировал подписку из VPNTYPE — YouTube 4K и Telegram заработали везде, где APK-клиенты других сервисов не справились с Ростелекомом."',
    lifehack: 'Если стандартный клиент VPN-сервиса не справляется с ТСПУ — попросите у провайдера ссылку-подписку и импортируйте её в Hiddify. Reality-протокол маскирует трафик под обычный TLS-сайт и обходит почти любую блокировку.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Hiddify'
  },
  {
    rank: 6, name: 'Windscribe', logo: 'WS', logoClass: 'logo-ws', pinned: false,
    badge: null,
    staticTags: ['10 ГБ/мес бесплатно на Android', 'Kill switch + WireGuard на Android'],
    tags: ['Для YouTube','Для Telegram','Для Роблокса','Бесплатный','Без логов'],
    free: '10 ГБ в месяц бесплатно после подтверждения email — без оплаты.',
    whyTitle: 'Бесплатный VPN на Android с самым большим лимитом трафика',
    whyText: '10 ГБ в месяц — это примерно 10 часов YouTube в 720p, 30 часов разговоров в Telegram или несколько недель базового сёрфинга. На Android есть нативный WireGuard-клиент, kill switch, R.O.B.E.R.T. — встроенный блокировщик рекламы и трекеров. Канадская юрисдикция, no-logs с проверяемой историей.',
    pros: ['10 ГБ бесплатного трафика в месяц — самый щедрый бесплатный тариф в рейтинге', 'Kill switch и автоблокировка трекеров через R.O.B.E.R.T. на Android', 'WireGuard работает быстро и не съедает батарею при включении в фоне', 'No-logs политика с многолетней репутацией и публичным разбором инцидентов'],
    cons: ['В России работает нестабильно — иногда требуется ручной перебор сервера', 'Приложение и поддержка на английском, русского интерфейса нет', 'В вечерний час пик скорость на бесплатных серверах падает заметнее платных'],
    speed: 85, maxSpeed: 100,
    price: 'от $5.75/мес (~540 ₽)',
    review: '"10 ГБ хватает на Telegram на весь месяц плюс пару вечеров YouTube в 720p. Для постоянного просмотра нужен платный тариф."',
    lifehack: 'Подтвердите email и введите промокод TWITTER10 при регистрации — получите 15 ГБ вместо стандартных 10. Без подтверждения email лимит урезан до 2 ГБ.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Windscribe'
  },
  {
    rank: 7, name: 'Psiphon', logo: 'PS', logoClass: 'logo-ps', pinned: false,
    badge: null,
    staticTags: ['Бесплатный VPN без регистрации', 'Безлимитный трафик на Android'],
    tags: ['Для YouTube','Для Telegram','Бесплатный','Без регистрации','Работает в РФ'],
    free: 'Полностью бесплатный, безлимитный, без обязательной регистрации.',
    whyTitle: 'Простейший бесплатный VPN на Android без регистрации и SMS',
    whyText: 'Скачал APK с официального сайта psiphon3.com или нашёл приложение в Google Play — запустил и работаешь, без аккаунта, без оплаты, без подтверждения телефона. Скорость 25–35 Мбит/с — достаточно для Telegram, YouTube в 480p и сёрфинга. В России держится стабильно: разработка ведётся при поддержке цензуроустойчивых проектов.',
    pros: ['Совсем без регистрации — открыл приложение и сразу пользуешься', 'Безлимитный бесплатный трафик на Android — нет лимитов в гигабайтах', 'Официальный APK с проверенного домена psiphon.ca, плюс есть в Google Play', 'Заточен под обход блокировок — стабильно работает в РФ и Беларуси'],
    cons: ['~30 Мбит/с — YouTube только в SD/480p, для 1080p уже не хватит', 'Нет встроенного kill switch — при обрыве трафик идёт напрямую', 'Политика конфиденциальности допускает агрегированную статистику использования'],
    speed: 30, maxSpeed: 100,
    price: 'Бесплатно',
    review: '"Скачал бесплатный VPN на Android без регистрации, открыл — Telegram заработал. YouTube в 480p смотрю без проблем. Для HD пришлось взять что-то быстрее."',
    lifehack: 'В настройках Psiphon переключите протокол на L2TP/IPSec — в ряде российских регионов он работает заметно стабильнее, чем стандартные SSH-туннели Psiphon.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Psiphon'
  },
  {
    rank: 8, name: '1.1.1.1 + WARP', logo: 'CF', logoClass: 'logo-cf', pinned: false,
    badge: null,
    staticTags: ['Бесплатный, безлимитный, без регистрации', 'Cloudflare · Google Play'],
    tags: ['Для Telegram','Бесплатный','Без регистрации','Высокая скорость'],
    free: 'Бесплатно и безлимитно — оплата только за WARP+ ускорение.',
    whyTitle: 'Бесплатный VPN от Cloudflare для Android — без аккаунта и без вирусов',
    whyText: '1.1.1.1 — это официальное приложение Cloudflare, одной из крупнейших инфраструктурных компаний интернета. Включает WARP — VPN-режим на собственном протоколе WireGuard-производной. Бесплатно, без регистрации, без рекламы, без лимита трафика. На Android доступен в Google Play. По строгости определения это не классический VPN: не маскирует страну происхождения, но шифрует весь трафик и обходит ряд провайдерских блокировок.',
    pros: ['Полностью бесплатный, без регистрации, без лимита по трафику', 'Официальное приложение Cloudflare в Google Play — без вирусов и тёмных схем', 'Скрывает DNS-запросы и шифрует трафик от провайдера и публичных Wi-Fi', 'Прост как мессенджер: запустил приложение, нажал одну кнопку'],
    cons: ['Не меняет страну: для разблокировки геозависимого контента не подходит', 'В России работает не у всех провайдеров — иногда требует включения режима MASQUE', 'YouTube через WARP открывается, но без полного обхода замедления ТСПУ'],
    speed: 90, maxSpeed: 100,
    price: 'Бесплатно · WARP+ от $4.99/мес',
    review: '"Бесплатный VPN на телефон Android для Telegram — идеален. Открыл, нажал кнопку — мессенджер заработал. Для YouTube в РФ скорости иногда не хватает."',
    lifehack: 'Если WARP не подключается у вашего провайдера — в настройках 1.1.1.1 переключите протокол с WireGuard на MASQUE. Этот режим маскирует трафик под обычный HTTPS и обходит большинство DPI-блокировок 2026 года.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к 1.1.1.1 + WARP'
  },
  {
    rank: 9, name: 'Outline VPN', logo: 'OL', logoClass: 'logo-ol', pinned: false,
    badge: null,
    staticTags: ['Shadowsocks — обходит DPI ТСПУ', 'Open-source · от Google Jigsaw'],
    tags: ['Бесплатный','Для YouTube','Без логов'],
    free: 'Бесплатный клиент при наличии своего VPS — оплата идёт только за сервер.',
    whyTitle: 'Бесплатный VPN на Android для тех, кто хочет полный контроль над сервером',
    whyText: 'Outline создан подразделением Google Jigsaw против цензуры. Это пара «сервер + Android-клиент» на базе Shadowsocks — протокола, который маскирует трафик под обычные HTTPS-пакеты. Между вами и сетью нет посредника-провайдера: вы сами разворачиваете VPS на Oracle Cloud или DigitalOcean и управляете им. Подходит, если важна полная анонимность и есть базовые технические навыки.',
    pros: ['Полностью бесплатный клиент — оплата только VPS (от $0 на Oracle Always Free)', 'Открытый код, аудит безопасности от Radically Open Security', 'Shadowsocks хорошо обходит DPI российских провайдеров', 'Официальное приложение Outline в Google Play без рекламы и трекеров'],
    cons: ['Нужен собственный VPS-сервер — без него приложение не работает', 'Первоначальная настройка через Outline Manager — не для новичков', 'Нет встроенного kill switch и автозапуска при загрузке Android'],
    speed: 80, maxSpeed: 100,
    price: 'Бесплатно (нужен VPS)',
    review: '"Развернул на бесплатном Oracle Cloud за час, скачал клиент в Google Play, ввёл ключ — YouTube 4K летает. Никакой сторонней компании в цепочке."',
    lifehack: 'Oracle Cloud Always Free даёт два VPS бесплатно навсегда — идеальная основа для Outline VPN без ежемесячных трат. Шаги: создайте VM Ubuntu Minimal, поставьте Outline Manager на ПК, скиньте ключ доступа на Android.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Outline VPN'
  },
  {
    rank: 10, name: 'Lantern', logo: 'LA', logoClass: 'logo-la', pinned: false,
    badge: null,
    staticTags: ['Без регистрации, без SMS', 'Аварийный VPN для Android'],
    tags: ['Бесплатный','Без регистрации','Работает в РФ'],
    free: 'Бесплатно 500 МБ в месяц — для срочного доступа без аккаунта.',
    whyTitle: 'Запасной бесплатный VPN на Android, когда нужно открыть Telegram прямо сейчас',
    whyText: 'Lantern — VPN-приложение, заточенное под быстрый старт: скачал APK с официального сайта или из Google Play (доступен в части регионов), запустил, работаешь — без регистрации, без email и без SMS. Скорость около 60 Мбит/с — выше, чем у Psiphon, но 500 МБ бесплатного трафика в месяц съедаются за 5 минут YouTube. Подходит как «спасательный круг» в экстренной ситуации.',
    pros: ['Без регистрации и SMS — запускается с первого касания', '~60 Мбит/с — выше, чем у других бесплатных VPN без регистрации', 'Работает в России на МТС, Билайн и Ростелекоме', 'Простой одностраничный интерфейс — даже без подсказок понятно'],
    cons: ['500 МБ в месяц — мало даже для часа YouTube в HD', 'Нет встроенного kill switch и no-logs политики', 'Платный тариф дороже большинства аналогов из рейтинга'],
    speed: 60, maxSpeed: 100,
    price: 'от $3/мес (~280 ₽)',
    review: '"В дороге без интернета на роуминге Telegram заработал за 30 секунд. Для YouTube 500 МБ не хватает, но в качестве запасного варианта — отлично."',
    lifehack: 'Держите Lantern на Android как запасной VPN для аварийных ситуаций. 500 МБ хватит на сутки сообщений в Telegram или WhatsApp, если основной VPN упал, а нужно открыть мессенджер прямо сейчас.',
    link: '#', ctaClass: 'cta-default', ctaText: 'Перейти к Lantern'
  }
];

function getRankBadge(rank) {
  if (rank === 1) return '<span class="card-rank-badge rank-gold">🥇 ТОП-1 · Выбор редакции</span>';
  if (rank === 2) return '<span class="card-rank-badge rank-silver">🥈 ТОП-2</span>';
  if (rank === 3) return '<span class="card-rank-badge rank-bronze">🥉 ТОП-3</span>';
  return `<span class="card-rank-badge rank-default">#${rank}</span>`;
}

function renderCard(vpn) {
  const speedPct = Math.round((vpn.speed / 100) * 100);
  const cardTags = vpn.staticTags.map(t => `<span class="card-tag card-tag-static">${t}</span>`).join('');
  const pros = vpn.pros.map(p => `<li>${p}</li>`).join('');
  const cons = vpn.cons.map(c => `<li>${c}</li>`).join('');

  const logoHtml = vpn.logoImg
    ? `<img src="${vpn.logoImg}" alt="${vpn.name}" class="card-logo-img">`
    : `<div class="card-logo ${vpn.logoClass}">${vpn.logo}</div>`;

  return `
  <div class="vpn-card rank-${vpn.rank}" data-tags='${JSON.stringify(vpn.tags)}' data-pinned="${vpn.pinned}">
    <div class="card-header">
      ${logoHtml}
      <div class="card-title-area">
        ${getRankBadge(vpn.rank)}
        <h3 class="card-name">${vpn.name}</h3>
        <div class="card-tags-row">${cardTags}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="free-badge"><div class="free-badge-icon">🎁</div><div><span>Бесплатно / тест:</span> ${vpn.free}</div></div>
      <div class="why-block">
        <h4>${vpn.whyTitle}</h4>
        <p>${vpn.whyText}</p>
      </div>
      <div class="pros-cons">
        <div class="pros-cons-col pros-col">
          <h5>Плюсы</h5>
          <ul>${pros}</ul>
        </div>
        <div class="pros-cons-col cons-col">
          <h5>Минусы</h5>
          <ul>${cons}</ul>
        </div>
      </div>
      <div class="speed-price">
        <div class="metric">
          <div class="metric-label">Скорость</div>
          <div class="metric-value">${vpn.speed}</div>
          <div class="metric-unit">Мбит/с</div>
          <div class="speed-bar-wrap"><div class="speed-bar"><div class="speed-bar-fill" style="width:${speedPct}%"></div></div></div>
        </div>
        <div class="metric">
          <div class="metric-label">Цена</div>
          <div class="metric-value" style="font-size:14px;padding-top:4px">${vpn.price}</div>
        </div>
      </div>
      <div class="review-block">${vpn.review}</div>
      <div class="lifehack">
        <div class="lifehack-icon">💡</div>
        <div><div class="lifehack-label">Совет</div><p>${vpn.lifehack}</p></div>
      </div>
    </div>
    ${vpn.pinned ? `<div class="card-cta"><a href="${vpn.link}" class="cta-btn ${vpn.ctaClass}" target="_blank" rel="nofollow">${vpn.ctaText} →</a></div>` : ''}
  </div>`;
}

function renderGrid(activeTag) {
  const grid = document.getElementById('ratingGrid');
  const pinned = vpns.filter(v => v.pinned);
  const rest = vpns.filter(v => !v.pinned);

  const matchTag = (vpn) => {
    if (activeTag === 'all') return true;
    return vpn.tags.includes(activeTag);
  };

  const pinnedFiltered = pinned.filter(matchTag);
  const restFiltered = rest.filter(matchTag);

  let html = '';

  if (pinnedFiltered.length > 0) {
    html += `<div class="pinned-label">Выбор редакции — ТОП-3</div>`;
    html += `<div class="cards-grid" id="pinnedGrid">`;
    pinnedFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (restFiltered.length > 0) {
    html += `<div class="rest-label">Позиции 4–10</div>`;
    html += `<div class="cards-grid-two" id="restGrid">`;
    restFiltered.forEach(v => { html += renderCard(v); });
    html += `</div>`;
  }

  if (pinnedFiltered.length === 0 && restFiltered.length === 0) {
    html = `<div style="padding:32px;text-align:center;color:var(--text-muted);background:var(--card);border-radius:var(--radius)">По этому фильтру VPN не найдено</div>`;
  }

  grid.innerHTML = html;
}

renderGrid('all');

document.getElementById('filterTags').addEventListener('click', function(e) {
  const btn = e.target.closest('.filter-tag');
  if (!btn) return;
  document.querySelectorAll('.filter-tag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrid(btn.dataset.tag);
});

document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

const burger = document.getElementById('headerBurger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  burger.addEventListener('click', function() {
    const isOpen = mobileMenu.classList.toggle('open');
    burger.setAttribute('aria-expanded', isOpen);
    mobileMenu.setAttribute('aria-hidden', !isOpen);
    document.body.classList.toggle('menu-open', isOpen);
  });
  mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('menu-open');
    });
  });
}

const navSections = ['rating','table','by-task','scams','articles','faq','reviews']
  .map(id => document.getElementById(id))
  .filter(Boolean);
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
navSections.forEach(el => sectionObserver.observe(el));
