import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/0449e838-efcb-4336-8bea-a1fd4e430ffa/files/883db615-5350-4b7a-9ffa-a69eb26d821d.jpg";
const BUST_IMG = "https://cdn.poehali.dev/projects/0449e838-efcb-4336-8bea-a1fd4e430ffa/files/6f5d39f3-c09a-43c9-b3d1-dc5c58bd87a8.jpg";
const CROWN_IMG = "https://cdn.poehali.dev/projects/0449e838-efcb-4336-8bea-a1fd4e430ffa/files/d6549bc4-d60f-4fd5-9165-52ac8f44ac8a.jpg";

const SECTIONS = ["Главная", "Экспозиции"];

const EXHIBITS = [
  { id: 1, title: "Действующий макет циркулярной пилорамы", era: "Современность", collection: "Античность", img: "https://cdn.poehali.dev/projects/0449e838-efcb-4336-8bea-a1fd4e430ffa/bucket/69f11463-ce4c-4c74-ae6a-48bdcea0bd8d.jpg", desc: "Действующий макет циркулярной пилорамы, созданный студентами колледжа. Демонстрирует принцип работы деревообрабатывающего оборудования." },
  { id: 2, title: 'Макет "Сани-Розавальни"', era: "Современность", collection: "Средневековье", img: "https://cdn.poehali.dev/projects/0449e838-efcb-4336-8bea-a1fd4e430ffa/bucket/44a599e5-0ed2-4e16-90c3-9d20b235dae6.jpg", desc: "Макет традиционных саней-розавальней, выполненный студентами колледжа. Воспроизводит конструкцию старинных крестьянских саней." },
  { id: 3, title: "Макет трактора", era: "Современность", collection: "Античность", img: "https://cdn.poehali.dev/projects/0449e838-efcb-4336-8bea-a1fd4e430ffa/bucket/8cc5a940-cfbc-41d8-a55e-aee7ee94f8be.jpg", desc: "Детализированный макет трактора Беларус, выполненный из дерева студентами колледжа." },
  { id: 4, title: "Макет крестьянской усадьбы", era: "Современность", collection: "Египет", img: "https://cdn.poehali.dev/projects/0449e838-efcb-4336-8bea-a1fd4e430ffa/bucket/a3c2ec42-e3ff-4b72-ab97-7902aa9a4fc1.jpg", desc: "Детализированный макет традиционной крестьянской усадьбы с избами, забором и хозяйственными постройками, выполненный студентами колледжа." },
  { id: 5, title: "Тесло", era: "Первая половина XX века", collection: "Средневековье", img: "https://cdn.poehali.dev/projects/0449e838-efcb-4336-8bea-a1fd4e430ffa/bucket/8dce18a6-1365-4392-a70a-85dfeeb77b43.jpg", desc: "Тесло из стали и дерева. Первая половина XX века. Инструмент плотника для грубой обтёски древесины." },
  { id: 6, title: "Скобель плотницкий прямой", era: "Начало XX века", collection: "Античность", img: "https://cdn.poehali.dev/projects/0449e838-efcb-4336-8bea-a1fd4e430ffa/bucket/ac7488d5-4a76-4b1b-b987-f77d120e08f9.jpg", desc: "Скобель плотницкий прямой из стали и дерева. Начало XX века. Использовался для обтёски и зачистки поверхности брёвен." },
];

const COLLECTIONS = ["Все коллекции", "Античность", "Средневековье", "Египет"];

const EVENTS = [
  { date: "28 МАР", title: "Открытие выставки «Путь Шёлка»", type: "Выставка", desc: "Более 300 экспонатов из коллекций 12 музеев мира" },
  { date: "5 АПР", title: "Лекция: Тайны Древнего Египта", type: "Лекция", desc: "Профессор Андрей Соколов — ведущий египтолог России" },
  { date: "12 АПР", title: "Ночь в музее 2026", type: "Событие", desc: "Специальная программа для взрослых и детей с 20:00 до 02:00" },
  { date: "19 АПР", title: "Мастер-класс по реставрации", type: "Мастер-класс", desc: "Узнайте, как реставраторы восстанавливают шедевры прошлого" },
];

const TOUR_ROOMS = [
  { id: 1, name: "Зал античности", items: 142, img: HERO_IMG, icon: "Columns2" },
  { id: 2, name: "Сокровищница", items: 87, img: CROWN_IMG, icon: "Crown" },
  { id: 3, name: "Египетский зал", items: 203, img: BUST_IMG, icon: "Sun" },
  { id: 4, name: "Зал Средневековья", items: 116, img: HERO_IMG, icon: "Shield" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCollection, setActiveCollection] = useState("Все коллекции");
  const [selectedExhibit, setSelectedExhibit] = useState<typeof EXHIBITS[0] | null>(null);
  const [isRotating, setIsRotating] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredExhibits = EXHIBITS.filter(e => {
    const matchSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.collection.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCollection = activeCollection === "Все коллекции" || e.collection === activeCollection;
    return matchSearch && matchCollection;
  });

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--dark-bg)', color: '#E8D5A3' }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: 'rgba(14,11,8,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center" style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}>
              <Icon name="Building2" size={16} />
            </div>
            <div>
              <div style={{ fontFamily: '"Cormorant SC", serif', color: 'var(--gold)', fontSize: '0.85rem', letterSpacing: '0.2em' }}>МУЗЕЙ</div>
              <div style={{ fontFamily: '"Cormorant SC", serif', color: 'rgba(201,168,76,0.5)', fontSize: '0.65rem', letterSpacing: '0.25em' }}>ТОМСКОГО АГРАРНОГО КОЛЛЕДЖА</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {SECTIONS.map(s => (
              <button key={s} onClick={() => setActiveSection(s)}
                className={`nav-link ${activeSection === s ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                {s}
              </button>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ color: 'var(--gold)', background: 'none', border: 'none', cursor: 'pointer' }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-4" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
            {SECTIONS.map(s => (
              <button key={s} onClick={() => { setActiveSection(s); setMenuOpen(false); }}
                className={`nav-link text-left ${activeSection === s ? 'active' : ''}`}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0' }}>
                {s}
              </button>
            ))}
          </div>
        )}
      </nav>

      <div className="pt-16">

        {/* ═══════════ ГЛАВНАЯ ═══════════ */}
        {activeSection === "Главная" && (
          <div>
            <div className="relative h-screen flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0">
                <img src={HERO_IMG} alt="Музей" className="w-full h-full object-cover" style={{ filter: 'brightness(0.25)' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, var(--dark-bg) 100%)' }} />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />
              </div>

              <div className="relative z-10 text-center max-w-4xl px-6">
                <div className="ornament-line mb-8 mx-auto" style={{ width: '120px' }} />

                <h1 className="fade-in-up fade-in-up-delay-2" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 300, lineHeight: 1.1, color: '#F0E4C2', marginBottom: '1.5rem' }}>
                  Музей<br /><em style={{ color: 'var(--gold)' }}>Томского</em><br />Аграрного Колледжа
                </h1>

                <div className="fade-in-up fade-in-up-delay-4 flex items-center justify-center gap-4 flex-wrap">
                  <button className="btn-gold px-8 py-3" onClick={() => setActiveSection("Экспонаты")}>
                    Исследовать коллекцию
                  </button>
                  <button className="btn-outline-gold px-8 py-3" onClick={() => setActiveSection("Виртуальный тур")}>
                    Виртуальный тур
                  </button>
                </div>
                <div className="ornament-line mt-8 mx-auto" style={{ width: '120px' }} />
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ color: 'rgba(201,168,76,0.4)', fontSize: '0.6rem', letterSpacing: '0.2em' }}>
                <span>SCROLL</span>
                <div style={{ width: '1px', height: '30px', background: 'linear-gradient(to bottom, rgba(201,168,76,0.4), transparent)' }} />
              </div>
            </div>



            <div className="py-20 px-6 max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--gold)', marginBottom: '1rem' }}>ИЗБРАННЫЕ ЭКСПОНАТЫ</div>
                <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#F0E4C2' }}>Жемчужины коллекции</h2>
                <div className="ornament-line mt-4 mx-auto" style={{ width: '80px' }} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {EXHIBITS.slice(0, 3).map(e => (
                  <div key={e.id} className="exhibit-card cursor-pointer" style={{ background: 'var(--dark-card)' }}
                    onClick={() => { setSelectedExhibit(e); setActiveSection("Экспонаты"); }}>
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={e.img} alt={e.title} className="w-full h-full object-cover" style={{ filter: 'brightness(0.7)', transition: 'all 0.4s' }}
                        onMouseEnter={ev => (ev.currentTarget.style.filter = 'brightness(0.9)')}
                        onMouseLeave={ev => (ev.currentTarget.style.filter = 'brightness(0.7)')} />
                    </div>
                    <div className="p-5">
                      <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '0.5rem' }}>{e.era}</div>
                      <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.3rem', fontWeight: 400, color: '#F0E4C2', marginBottom: '0.5rem' }}>{e.title}</h3>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: 'rgba(232,201,122,0.45)', lineHeight: 1.7 }}>{e.desc.slice(0, 80)}...</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <button className="btn-outline-gold px-10 py-3" onClick={() => setActiveSection("Экспонаты")}>
                  Смотреть все экспонаты
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════ ИСТОРИЯ ═══════════ */}
        {activeSection === "История" && (
          <div className="min-h-screen">
            <div className="relative h-64 flex items-end pb-12 px-6 overflow-hidden">
              <img src={HERO_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.2)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--dark-bg), transparent)' }} />
              <div className="relative z-10 max-w-4xl mx-auto w-full">
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--gold)', marginBottom: '0.75rem' }}>О МУЗЕЕ</div>
                <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#F0E4C2' }}>История музея</h1>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-16">
              <div className="ornament-line mb-12" />
              <div className="space-y-0">
                {[
                  { year: "1847", title: "Основание музея", text: "По указу императора Николая I в Санкт-Петербурге основан Государственный исторический музей. Первая экспозиция насчитывала 3 200 предметов, переданных из личной коллекции царской семьи." },
                  { year: "1891", title: "Первое расширение", text: "После масштабной реконструкции музей открыл 12 новых залов. Коллекция пополнилась артефактами из экспедиций в Египет и Грецию. Число экспонатов превысило 100 000." },
                  { year: "1917–1922", title: "Трудные годы", text: "В годы революции и гражданской войны музей оставался открытым. Сотрудники рисковали жизнью, спасая бесценные артефакты. Часть коллекции была эвакуирована на Урал." },
                  { year: "1965", title: "Статус национального достояния", text: "Указом Совета Министров музей получил статус объекта национального наследия. Началась масштабная научная каталогизация всех фондов. К тому времени коллекция превысила 2 миллиона единиц." },
                  { year: "2024", title: "Цифровая трансформация", text: "Открытие виртуального музея с 3D-просмотром экспонатов. Сегодня более 1 миллиона посетителей ежегодно исследуют коллекцию онлайн из 180 стран мира." },
                ].map((item, i) => (
                  <div key={i} style={{ borderLeft: '1px solid rgba(201,168,76,0.2)', paddingLeft: '2rem', marginLeft: '4rem', position: 'relative', paddingBottom: '3rem' }}>
                    <div style={{ position: 'absolute', left: '-0.75rem', top: '0', width: '1.5rem', height: '1.5rem', background: 'var(--dark-bg)', border: '1px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--gold)' }} />
                    </div>
                    <div style={{ position: 'absolute', left: '-4.5rem', top: '0', fontFamily: '"Cormorant SC", serif', fontSize: '0.75rem', color: 'var(--gold)', letterSpacing: '0.05em', width: '3.5rem', textAlign: 'right' }}>{item.year}</div>
                    <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', fontWeight: 400, color: '#F0E4C2', marginBottom: '0.75rem' }}>{item.title}</h3>
                    <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: 'rgba(232,201,122,0.5)', lineHeight: 1.9 }}>{item.text}</p>
                  </div>
                ))}
              </div>

              <div className="ornament-line mt-4 mb-16" />

              <div className="text-center mb-10">
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--gold)', marginBottom: '0.75rem' }}>РУКОВОДСТВО</div>
                <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', fontWeight: 300, color: '#F0E4C2' }}>Директора музея</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Александр Петров", role: "Генеральный директор", years: "с 2018" },
                  { name: "Мария Соколова", role: "Научный директор", years: "с 2015" },
                  { name: "Игорь Волков", role: "Директор по цифровому развитию", years: "с 2022" },
                ].map((p, i) => (
                  <div key={i} className="corner-ornament p-6 text-center" style={{ background: 'var(--dark-card)' }}>
                    <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center" style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.05)', color: 'var(--gold)' }}>
                      <Icon name="User" size={24} />
                    </div>
                    <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: '#F0E4C2', marginBottom: '0.25rem' }}>{p.name}</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', color: 'rgba(201,168,76,0.5)', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{p.role}</div>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', color: 'rgba(201,168,76,0.3)' }}>{p.years}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════ ЭКСПОЗИЦИИ ═══════════ */}
        {activeSection === "Экспозиции" && (
          <div className="min-h-screen">
            <div className="relative h-56 flex items-end pb-10 px-6 overflow-hidden">
              <img src={CROWN_IMG} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ filter: 'brightness(0.2)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--dark-bg), transparent)' }} />
              <div className="relative z-10 max-w-6xl mx-auto w-full">
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--gold)', marginBottom: '0.5rem' }}>ПОСТОЯННЫЕ И ВРЕМЕННЫЕ</div>
                <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#F0E4C2' }}>Экспозиции</h1>
              </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-12">
              <div className="ornament-line mb-12" />
              <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--gold)', marginBottom: '2rem' }}>ПОСТОЯННЫЕ ЭКСПОЗИЦИИ</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {[
                  { title: "Древний Восток", subtitle: "Залы 1–8", items: 847, img: HERO_IMG, desc: "От Шумера до Персии — полная история древневосточных цивилизаций. Клинописные таблички, глиняные сосуды, ювелирные украшения." },
                  { title: "Античный мир", subtitle: "Залы 9–18", items: 1203, img: BUST_IMG, desc: "Греция и Рим во всём своём величии. Скульптуры, амфоры, мозаики, монеты и предметы быта двух великих цивилизаций." },
                  { title: "Средние Века", subtitle: "Залы 19–27", items: 634, img: CROWN_IMG, desc: "Рыцарская культура, монастырское искусство, торговые пути. Доспехи, манускрипты, витражи и реликварии." },
                  { title: "Новое Время", subtitle: "Залы 28–35", items: 912, img: HERO_IMG, desc: "XVI–XIX век: от эпохи Возрождения до промышленной революции. Живопись, часовое искусство, научные приборы." },
                ].map((c, i) => (
                  <div key={i} className="exhibit-card" style={{ background: 'var(--dark-card)', display: 'flex', overflow: 'hidden' }}>
                    <div className="w-32 flex-shrink-0">
                      <img src={c.img} alt={c.title} className="w-full h-full object-cover" style={{ filter: 'brightness(0.6)' }} />
                    </div>
                    <div className="p-5 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--gold)' }}>{c.subtitle}</div>
                          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', color: 'rgba(201,168,76,0.4)' }}>{c.items} экспонатов</div>
                        </div>
                        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', fontWeight: 400, color: '#F0E4C2', marginBottom: '0.5rem' }}>{c.title}</h3>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', color: 'rgba(232,201,122,0.45)', lineHeight: 1.7 }}>{c.desc}</p>
                      </div>
                      <button className="btn-outline-gold px-4 py-2 mt-3 self-start">Перейти</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="ornament-line mb-12" />
              <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--gold)', marginBottom: '2rem' }}>ВРЕМЕННЫЕ ВЫСТАВКИ</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Путь Шёлка", period: "28 мар — 30 июн 2026", tag: "Новая" },
                  { title: "Сокровища Скифии", period: "15 янв — 20 апр 2026", tag: "Идёт" },
                  { title: "Мастера Возрождения", period: "1 май — 31 авг 2026", tag: "Скоро" },
                ].map((e, i) => (
                  <div key={i} className="exhibit-card p-6" style={{ background: 'var(--dark-card)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.1em', padding: '2px 8px', border: '1px solid var(--gold)', color: 'var(--gold)' }}>{e.tag}</div>
                    <Icon name="Frame" size={32} style={{ color: 'rgba(201,168,76,0.3)', marginBottom: '1rem' }} />
                    <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', fontWeight: 400, color: '#F0E4C2', marginBottom: '0.5rem' }}>{e.title}</h3>
                    <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', color: 'rgba(201,168,76,0.5)' }}>{e.period}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ═══════════ ЭКСПОНАТЫ ═══════════ */}
        {activeSection === "Экспонаты" && (
          <div className="min-h-screen px-6 py-12">
            <div className="max-w-7xl mx-auto">

              {selectedExhibit && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.9)' }}>
                  <div className="relative w-full max-w-2xl" style={{ background: 'var(--dark-card)', border: '1px solid rgba(201,168,76,0.3)' }}>
                    <button onClick={() => setSelectedExhibit(null)} className="absolute top-4 right-4 z-10"
                      style={{ color: 'var(--gold)', background: 'none', border: 'none', cursor: 'pointer' }}>
                      <Icon name="X" size={20} />
                    </button>
                    <div className="p-8">
                      <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.6rem', letterSpacing: '0.25em', color: 'var(--gold)', marginBottom: '0.5rem' }}>3D ПРОСМОТР</div>
                      <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 300, color: '#F0E4C2', marginBottom: '1.5rem' }}>{selectedExhibit.title}</h2>

                      <div className="relative mb-6" style={{ background: '#0A0806', border: '1px solid rgba(201,168,76,0.2)', padding: '2rem', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '280px', perspective: '800px' }}>
                        <div style={{ transformStyle: 'preserve-3d', animation: isRotating ? 'rotate3d 8s linear infinite' : 'none' }}>
                          <img src={selectedExhibit.img} alt={selectedExhibit.title} style={{ width: '200px', height: '200px', objectFit: 'cover', filter: 'brightness(0.85)', boxShadow: '0 0 40px rgba(201,168,76,0.2)' }} />
                        </div>
                        <div className="absolute bottom-3 right-3">
                          <button onClick={() => setIsRotating(!isRotating)} style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: 'var(--gold)', padding: '4px 8px', cursor: 'pointer', fontSize: '0.65rem', fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.1em' }}>
                            {isRotating ? "ПАУЗА" : "ВРАЩЕНИЕ"}
                          </button>
                        </div>
                        <div className="absolute top-3 left-3" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', color: 'rgba(201,168,76,0.3)', letterSpacing: '0.1em' }}>
                          Нажмите ПАУЗА для детального изучения
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div style={{ border: '1px solid rgba(201,168,76,0.15)', padding: '0.75rem' }}>
                          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.4)', marginBottom: '0.25rem' }}>КОЛЛЕКЦИЯ</div>
                          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1rem', color: 'var(--gold)' }}>{selectedExhibit.collection}</div>
                        </div>
                        <div style={{ border: '1px solid rgba(201,168,76,0.15)', padding: '0.75rem' }}>
                          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.4)', marginBottom: '0.25rem' }}>ЭПОХА</div>
                          <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1rem', color: 'var(--gold)' }}>{selectedExhibit.era}</div>
                        </div>
                      </div>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: 'rgba(232,201,122,0.5)', lineHeight: 1.8 }}>{selectedExhibit.desc}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-10">
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--gold)', marginBottom: '0.75rem' }}>КАТАЛОГ</div>
                <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#F0E4C2', marginBottom: '2rem' }}>Экспонаты</h1>

                <div className="flex flex-col md:flex-row gap-4 mb-8">
                  <div className="relative flex-1">
                    <Icon name="Search" size={14} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(201,168,76,0.4)' }} />
                    <input
                      className="search-input w-full py-3 pr-4"
                      style={{ paddingLeft: '2.5rem' }}
                      placeholder="Поиск по названию или коллекции..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {COLLECTIONS.map(c => (
                      <button key={c} onClick={() => setActiveCollection(c)}
                        style={{
                          fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em',
                          padding: '8px 16px', cursor: 'pointer', transition: 'all 0.3s',
                          background: activeCollection === c ? 'var(--gold)' : 'transparent',
                          color: activeCollection === c ? '#0E0B08' : 'var(--gold)',
                          border: '1px solid rgba(201,168,76,0.4)',
                          textTransform: 'uppercase' as const,
                        }}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="ornament-line mb-8" />
              </div>

              {filteredExhibits.length === 0 ? (
                <div className="text-center py-20" style={{ color: 'rgba(201,168,76,0.3)', fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                  Экспонаты не найдены
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredExhibits.map(e => (
                    <div key={e.id} className="exhibit-card cursor-pointer" style={{ background: 'var(--dark-card)' }}
                      onClick={() => setSelectedExhibit(e)}>
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img src={e.img} alt={e.title} className="w-full h-full object-cover" style={{ filter: 'brightness(0.7)', transition: 'all 0.4s' }}
                          onMouseEnter={ev => (ev.currentTarget.style.filter = 'brightness(0.9)')}
                          onMouseLeave={ev => (ev.currentTarget.style.filter = 'brightness(0.7)')} />
                        <div className="absolute top-3 right-3 flex items-center gap-1" style={{ background: 'rgba(14,11,8,0.8)', padding: '4px 8px', border: '1px solid rgba(201,168,76,0.3)' }}>
                          <Icon name="RotateCcw" size={10} style={{ color: 'var(--gold)' }} />
                          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--gold)' }}>3D</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <span style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.6rem', letterSpacing: '0.2em', color: 'var(--gold)' }}>{e.era}</span>
                          <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', color: 'rgba(201,168,76,0.35)', padding: '2px 6px', border: '1px solid rgba(201,168,76,0.2)' }}>{e.collection}</span>
                        </div>
                        <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.3rem', fontWeight: 400, color: '#F0E4C2', marginBottom: '0.5rem' }}>{e.title}</h3>
                        <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', color: 'rgba(232,201,122,0.4)', lineHeight: 1.7 }}>{e.desc.slice(0, 85)}...</p>
                        <div className="mt-4 flex items-center gap-1" style={{ color: 'var(--gold)', fontFamily: 'Montserrat, sans-serif', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
                          <span>Открыть 3D-просмотр</span>
                          <Icon name="ArrowRight" size={12} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ═══════════ ТУР ═══════════ */}
        {activeSection === "Виртуальный тур" && (
          <div className="min-h-screen px-6 py-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--gold)', marginBottom: '0.75rem' }}>ОНЛАЙН-ПРОГУЛКА</div>
                <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#F0E4C2', marginBottom: '1rem' }}>Виртуальный тур</h1>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.8rem', color: 'rgba(201,168,76,0.5)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.8 }}>
                  Выберите зал и начните путешествие сквозь тысячелетия истории, не выходя из дома
                </p>
                <div className="ornament-line mt-6 mx-auto" style={{ width: '80px' }} />
              </div>

              <div className="relative mb-8 overflow-hidden" style={{ border: '1px solid rgba(201,168,76,0.2)' }}>
                <img src={HERO_IMG} alt="Виртуальный тур" className="w-full" style={{ height: '420px', objectFit: 'cover', filter: 'brightness(0.4)' }} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div style={{ width: '80px', height: '80px', border: '2px solid var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', background: 'rgba(14,11,8,0.6)', cursor: 'pointer' }}
                    onClick={() => setActiveSection("Экспонаты")}>
                    <Icon name="Play" size={32} style={{ color: 'var(--gold)', marginLeft: '4px' }} />
                  </div>
                  <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 300, color: '#F0E4C2', marginBottom: '0.5rem' }}>Зал Древнего Востока</div>
                  <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.6)' }}>ЗАЛЫ 1–8 · 847 ЭКСПОНАТОВ</div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {TOUR_ROOMS.map(room => (
                  <div key={room.id} className="tour-room cursor-pointer" style={{ background: 'var(--dark-card)', overflow: 'hidden' }}>
                    <div className="relative h-32">
                      <img src={room.img} alt={room.name} className="w-full h-full object-cover" style={{ filter: 'brightness(0.4)' }} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon name={room.icon} size={28} style={{ color: 'rgba(201,168,76,0.7)' }} fallback="Building2" />
                      </div>
                    </div>
                    <div className="p-4">
                      <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1rem', color: '#F0E4C2', marginBottom: '0.25rem' }}>{room.name}</div>
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.62rem', color: 'rgba(201,168,76,0.4)', letterSpacing: '0.1em' }}>{room.items} экспонатов</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-8 corner-ornament" style={{ background: 'var(--dark-card)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  {[
                    { icon: "Monitor", title: "360° Панорамы", desc: "Полное погружение в атмосферу залов с высококачественными сферическими фотографиями" },
                    { icon: "RotateCcw", title: "3D Экспонаты", desc: "Рассматривайте артефакты со всех сторон, управляя вращением пальцем или мышью" },
                    { icon: "Headphones", title: "Аудиогид", desc: "Профессиональные комментарии экспертов и историков к каждому экспонату" },
                  ].map((f, i) => (
                    <div key={i}>
                      <div className="flex justify-center mb-3">
                        <Icon name={f.icon} size={24} style={{ color: 'var(--gold)' }} fallback="Star" />
                      </div>
                      <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: '#F0E4C2', marginBottom: '0.5rem' }}>{f.title}</div>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', color: 'rgba(201,168,76,0.4)', lineHeight: 1.7 }}>{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════ СОБЫТИЯ ═══════════ */}
        {activeSection === "События" && (
          <div className="min-h-screen px-6 py-12">
            <div className="max-w-5xl mx-auto">
              <div className="mb-10">
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--gold)', marginBottom: '0.75rem' }}>АФИША</div>
                <h1 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 300, color: '#F0E4C2', marginBottom: '0.5rem' }}>События и мероприятия</h1>
                <div className="ornament-line mt-4" style={{ width: '80px' }} />
              </div>

              <div className="mb-16 space-y-px">
                {EVENTS.map((event, i) => (
                  <div key={i} className="exhibit-card flex gap-6 items-start p-6" style={{ background: 'var(--dark-card)', cursor: 'pointer' }}>
                    <div className="flex-shrink-0 text-center" style={{ width: '70px' }}>
                      <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.6rem', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{event.date.split(' ')[0]}</div>
                      <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.5)' }}>{event.date.split(' ')[1]}</div>
                    </div>
                    <div className="ornament-line-v self-center" style={{ height: '60px' }} />
                    <div className="flex-1">
                      <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.5)', marginBottom: '0.4rem', textTransform: 'uppercase' as const }}>{event.type}</div>
                      <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.4rem', fontWeight: 400, color: '#F0E4C2', marginBottom: '0.4rem' }}>{event.title}</h3>
                      <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: 'rgba(201,168,76,0.4)', lineHeight: 1.6 }}>{event.desc}</p>
                    </div>
                    <button className="btn-outline-gold px-4 py-2 flex-shrink-0 self-center">Записаться</button>
                  </div>
                ))}
              </div>

              <div className="ornament-line mb-12" />

              <div className="p-8 text-center corner-ornament" style={{ background: 'var(--dark-card)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.35em', color: 'var(--gold)', marginBottom: '0.75rem' }}>БУДЬТЕ В КУРСЕ</div>
                <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 300, color: '#F0E4C2', marginBottom: '1rem' }}>Подпишитесь на афишу</h2>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.78rem', color: 'rgba(201,168,76,0.45)', marginBottom: '2rem', lineHeight: 1.7 }}>
                  Первыми узнавайте о новых выставках, лекциях и специальных событиях музея
                </p>
                <div className="flex gap-3 max-w-md mx-auto">
                  <input className="search-input flex-1 py-3 px-4" placeholder="Ваш email" />
                  <button className="btn-gold px-6 py-3">Подписаться</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FOOTER */}
        <footer className="mt-20 py-12 px-6" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          <div className="max-w-6xl mx-auto">
            <div className="ornament-line mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.85rem', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '1rem' }}>МУЗЕЙ ТОМСКОГО АГРАРНОГО КОЛЛЕДЖА</div>
                <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', color: 'rgba(201,168,76,0.4)', lineHeight: 1.8 }}>Музей Томского аграрного колледжа — хранитель истории и традиций учебного заведения.</p>
              </div>
              <div>
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '1rem' }}>НАВИГАЦИЯ</div>
                <div className="space-y-2">
                  {SECTIONS.map(s => (
                    <button key={s} onClick={() => setActiveSection(s)} style={{ display: 'block', fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', color: 'rgba(201,168,76,0.4)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.05em', transition: 'color 0.2s' }}
                      onMouseEnter={ev => (ev.currentTarget.style.color = 'var(--gold)')}
                      onMouseLeave={ev => (ev.currentTarget.style.color = 'rgba(201,168,76,0.4)')}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontFamily: '"Cormorant SC", serif', fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gold)', marginBottom: '1rem' }}>КОНТАКТЫ</div>
                <div className="space-y-2">
                  {[
                    { icon: "MapPin", text: "Красная площадь, 1/2, Москва" },
                    { icon: "Phone", text: "+7 (495) 692-37-31" },
                    { icon: "Mail", text: "info@museum.ru" },
                    { icon: "Clock", text: "Вт–Вс: 10:00–18:00" },
                  ].map((c, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon name={c.icon} size={12} style={{ color: 'rgba(201,168,76,0.4)', flexShrink: 0 }} fallback="Info" />
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.72rem', color: 'rgba(201,168,76,0.4)' }}>{c.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ornament-line mb-4" />
            <div className="text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(201,168,76,0.2)' }}>
              © 2026 МУЗЕЙ ТОМСКОГО АГРАРНОГО КОЛЛЕДЖА · ВСЕ ПРАВА ЗАЩИЩЕНЫ
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}