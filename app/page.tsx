/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
import { Hero } from "./Hero.tsx";

export default function Home() {
  return (
    <main className="main-back min-h-screen bg-[#0f0f0f] pt-16 md:pt-20">
      <Hero />
      <section
        id="platform"
        className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/50 to-transparent opacity-50" />
        <div className="relative z-10 max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative" style={{ opacity: 1, transform: "none" }}>
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="bg-primary-500/20 border border-primary-500/50 rounded-full px-4 md:px-6 py-2 backdrop-blur-sm">
                <span className="text-xs md:text-sm font-medium text-primary-300 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sparkles w-4 h-4 inline"
                    aria-hidden="true"
                  >
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                    <path d="M20 2v4" />
                    <path d="M22 4h-4" />
                    <circle cx={4} cy={20} r={2} />
                  </svg>{" "}
                  Живое интерактивное демо
                </span>
              </div>
            </div>
            <div className="hidden lg:block relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl border-2 border-primary-500/30 shadow-2xl overflow-hidden max-h-[calc(100vh-200px)]">
              <div className="w-full overflow-hidden h-[calc(100vh-200px)]">
                <div className="p-8 h-full">
                  <div className="flex gap-6 h-full">
                    <div
                      className="h-full overflow-y-auto bg-[#0f0f0f] border border-[#2a2a2a]/50 rounded-xl p-5 flex-shrink-0 scrollbar-hover-compact"
                      style={{
                        opacity: 1,
                        transform: "none",
                        width: "7rem",
                      }}
                    >
                      <div className="h-full flex flex-col">
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-3">
                            <h2 className="text-xl font-bold text-foreground">
                              Задачи
                            </h2>
                          </div>
                        </div>
                        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hover space-y-3">
                          <div
                            data-task-id={1}
                            className="mb-3"
                            style={{ opacity: 1, transform: "none" }}
                          >
                            <div className="relative">
                              <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] cursor-pointer transition-all relative group overflow-hidden">
                                <div>
                                  <div className="relative overflow-hidden">
                                    <div
                                      className="flex flex-col items-center justify-center relative py-3 px-2"
                                      style={{ opacity: 1, height: "auto" }}
                                    >
                                      <h3
                                        className="whitespace-nowrap text-sm font-medium text-primary-400"
                                        style={{
                                          writingMode: "vertical-rl",
                                          textOrientation: "mixed",
                                          opacity: 1,
                                          transform: "rotate(180deg)",
                                        }}
                                      >
                                        Инвесторский аутрич Q1 2025
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <svg
                                className="absolute pointer-events-none"
                                style={{
                                  borderRadius: "0.75rem",
                                  left: 2,
                                  top: 2,
                                  width: "calc(100% - 4px)",
                                  height: "calc(100% - 4px)",
                                }}
                              >
                                <rect
                                  x={0}
                                  y={0}
                                  width="100%"
                                  height="100%"
                                  rx={12}
                                  fill="none"
                                  stroke="#d4c5b0"
                                  strokeWidth={2}
                                  strokeDasharray="8 4"
                                  strokeDashoffset={0}
                                  style={{
                                    animation:
                                      "20s linear 0s infinite normal none running dashRun",
                                  }}
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            data-task-id={2}
                            className="mb-3"
                            style={{ opacity: 1, transform: "none" }}
                          >
                            <div className="relative">
                              <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] cursor-pointer transition-all relative group overflow-hidden">
                                <div>
                                  <div className="relative overflow-hidden">
                                    <div
                                      className="flex flex-col items-center justify-center relative py-3 px-2"
                                      style={{ opacity: 1, height: "auto" }}
                                    >
                                      <h3
                                        className="whitespace-nowrap text-sm font-medium text-gray-500"
                                        style={{
                                          writingMode: "vertical-rl",
                                          textOrientation: "mixed",
                                          opacity: "0.6",
                                          transform: "rotate(180deg)",
                                        }}
                                      >
                                        Нетворкинг на технологических
                                        конференциях
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-task-id={3}
                            className="mb-3"
                            style={{ opacity: 1, transform: "none" }}
                          >
                            <div className="relative">
                              <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] cursor-pointer transition-all relative group overflow-hidden">
                                <div>
                                  <div className="relative overflow-hidden">
                                    <div
                                      className="flex flex-col items-center justify-center relative py-3 px-2"
                                      style={{ opacity: 1, height: "auto" }}
                                    >
                                      <h3
                                        className="whitespace-nowrap text-sm font-medium text-gray-500"
                                        style={{
                                          writingMode: "vertical-rl",
                                          textOrientation: "mixed",
                                          opacity: "0.6",
                                          transform: "rotate(180deg)",
                                        }}
                                      >
                                        Партнерские возможности
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-full overflow-y-auto bg-[#0f0f0f] border border-[#2a2a2a]/50 rounded-xl p-5 w-96 flex-shrink-0 scrollbar-hover"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div className="h-full flex flex-col">
                        <div className="mb-2">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex-1">
                              <h2 className="text-xl font-bold text-foreground">
                                Профили
                              </h2>
                            </div>
                            <div className="flex-shrink-0 ml-3 flex items-center gap-2" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full mb-4">
                          <div
                            className="block"
                            tabIndex={0}
                            style={{ transform: "none" }}
                          >
                            <button
                              className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary-500 to-primary-400 text-[#1a1a1a] font-semibold hover:from-primary-400 hover:to-primary-300 focus:ring-primary-500 shadow-lg shadow-primary-500/20 px-3 py-1.5 text-sm w-full text-sm"
                              // disabled=""
                            >
                              + Добавить URL
                            </button>
                          </div>
                        </div>
                        <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-3 scrollbar-hover">
                          <div
                            className="mb-3"
                            style={{ opacity: 1, transform: "none" }}
                          >
                            <div className="relative">
                              <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] cursor-pointer transition-all relative group overflow-hidden">
                                <div>
                                  <div className="flex items-start gap-3 mb-2">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center border border-primary-500/30">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-user w-6 h-6 text-primary-400"
                                        aria-hidden="true"
                                      >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                      </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between mb-1">
                                        <h3 className="font-medium text-foreground text-sm flex-1 break-all pr-2">
                                          <div className="font-semibold">
                                            Sarah Mitchell
                                          </div>
                                        </h3>
                                        <div className="flex flex-col items-end gap-1 ml-2">
                                          <span
                                            className="px-2 py-1 rounded-full text-xs text-white whitespace-nowrap flex-shrink-0 "
                                            style={{
                                              backgroundColor:
                                                "rgb(201, 173, 131)",
                                            }}
                                          >
                                            Завершено
                                          </span>
                                        </div>
                                      </div>
                                      <div>
                                        <div className="text-xs text-gray-400 font-normal mt-1">
                                          Партнер в Sequoia Capital | Инвестор в
                                          ранние SaaS стартапы
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between gap-4 text-xs text-gray-400 pl-15">
                                    <span>Факты: 12</span>
                                  </div>
                                </div>
                              </div>
                              <svg
                                className="absolute pointer-events-none"
                                style={{
                                  borderRadius: "0.75rem",
                                  left: 2,
                                  top: 2,
                                  width: "calc(100% - 4px)",
                                  height: "calc(100% - 4px)",
                                }}
                              >
                                <rect
                                  x={0}
                                  y={0}
                                  width="100%"
                                  height="100%"
                                  rx={12}
                                  fill="none"
                                  stroke="#d4c5b0"
                                  strokeWidth={2}
                                  strokeDasharray="8 4"
                                  strokeDashoffset={0}
                                  style={{
                                    animation:
                                      "20s linear 0s infinite normal none running dashRun",
                                  }}
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            className="mb-3"
                            style={{ opacity: 1, transform: "none" }}
                          >
                            <div className="relative">
                              <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] cursor-pointer transition-all relative group overflow-hidden">
                                <div>
                                  <div className="flex items-start gap-3 mb-2">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center border border-primary-500/30">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-user w-6 h-6 text-primary-400"
                                        aria-hidden="true"
                                      >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                      </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between mb-1">
                                        <h3 className="font-medium text-foreground text-sm flex-1 break-all pr-2">
                                          <div className="font-semibold">
                                            Michael Chen
                                          </div>
                                        </h3>
                                        <div className="flex flex-col items-end gap-1 ml-2">
                                          <span
                                            className="px-2 py-1 rounded-full text-xs text-white whitespace-nowrap flex-shrink-0 "
                                            style={{
                                              backgroundColor:
                                                "rgb(201, 173, 131)",
                                            }}
                                          >
                                            Завершено
                                          </span>
                                        </div>
                                      </div>
                                      <div>
                                        <div className="text-xs text-gray-400 font-normal mt-1">
                                          Генеральный партнер в Andreessen
                                          Horowitz | Корпоративное ПО
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between gap-4 text-xs text-gray-400 pl-15">
                                    <span>Факты: 15</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="mb-3"
                            style={{ opacity: 1, transform: "none" }}
                          >
                            <div className="relative">
                              <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] cursor-pointer transition-all relative group overflow-hidden">
                                <div>
                                  <div className="flex items-start gap-3 mb-2">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center border border-primary-500/30">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-user w-6 h-6 text-primary-400"
                                        aria-hidden="true"
                                      >
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx={12} cy={7} r={4} />
                                      </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-start justify-between mb-1">
                                        <h3 className="font-medium text-foreground text-sm flex-1 break-all pr-2">
                                          <div className="font-semibold">
                                            Emily Rodriguez
                                          </div>
                                        </h3>
                                        <div className="flex flex-col items-end gap-1 ml-2">
                                          <span className="px-2 py-1 rounded-full text-xs text-white whitespace-nowrap flex-shrink-0 bg-purple-500">
                                            Генерация приветствия
                                          </span>
                                        </div>
                                      </div>
                                      <div>
                                        <div className="text-xs text-gray-400 font-normal mt-1">
                                          CEO &amp; Основатель WorkflowAI |
                                          Forbes 30 Under 30
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between gap-4 text-xs text-gray-400 pl-15">
                                    <span>Факты: 10</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 w-full">
                          <div className="block" tabIndex={0}>
                            <button
                              className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-success-500 to-success-600 text-white hover:from-success-600 hover:to-success-700 focus:ring-success-500 shadow-lg shadow-success-500/20 px-3 py-1.5 text-sm w-full text-sm"
                              // disabled=""
                            >
                              Запустить анализ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-full overflow-y-auto bg-[#0f0f0f] border border-[#2a2a2a]/50 rounded-xl p-5 flex-1 relative scrollbar-hover"
                      data-column="greeting"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div
                        className="h-full flex flex-col"
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <div className="flex-shrink-0 mb-4">
                          <h2 className="text-2xl font-bold text-foreground">
                            Сообщения
                          </h2>
                        </div>
                        <div className="flex-1 overflow-y-auto overflow-x-hidden rounded-lg border border-gray-700/30 bg-gradient-to-br from-[#1a1a1a] to-[#141414] p-6 relative">
                          <div className="space-y-4">
                            <div className="flex justify-end mb-6">
                              <div className="max-w-[85%] flex flex-col items-end">
                                <div className="relative bg-gradient-to-br from-primary-900/20 to-primary-800/10 border border-primary-500/30 rounded-2xl rounded-tr-sm p-4 shadow-lg">
                                  <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                                    <span>
                                      Привет, Sarah, Меня впечатлил ваш{" "}
                                    </span>
                                    <span
                                      className="fact-reference cursor-pointer transition-all text-primary-400 hover:text-primary-300"
                                      title="View facts"
                                    >
                                      недавний доклад на SaaStr Annual
                                    </span>
                                    <span> о будущем B2B SaaS - ваши </span>
                                    <span
                                      className="fact-reference cursor-pointer transition-all text-primary-400 hover:text-primary-300"
                                      title="View facts"
                                    >
                                      идеи о мультипликаторах выручки
                                    </span>
                                    <span>
                                      {" "}
                                      в текущем рынке действительно резонируют с
                                      нашим подходом. Я обращаюсь к вам, потому
                                      что мы создаем платформу автоматизации
                                      рабочих процессов на основе AI, которая
                                      идеально соответствует вашему
                                      инвестиционному тезису о{" "}
                                    </span>
                                    <span
                                      className="fact-reference cursor-pointer transition-all text-primary-400 hover:text-primary-300"
                                      title="View facts"
                                    >
                                      компаниях, решающих проблемы автоматизации
                                      рабочих процессов
                                    </span>
                                    <span>
                                      . Мы сейчас на уровне $2.3M ARR с 95%
                                      удержанием клиентов, и ваш опыт со{" "}
                                    </span>
                                    <span
                                      className="fact-reference cursor-pointer transition-all text-primary-400 hover:text-primary-300"
                                      title="View facts"
                                    >
                                      стратегиями роста, ориентированными на
                                      продукт
                                    </span>
                                    <span> в ваших </span>
                                    <span
                                      className="fact-reference cursor-pointer transition-all text-primary-400 hover:text-primary-300"
                                      title="View facts"
                                    >
                                      портфельных компаниях, таких как DataFlow
                                    </span>
                                    <span>
                                      {" "}
                                      был бы неоценим при планировании нашей
                                      серии A. Были бы вы открыты к короткому
                                      разговору о том, что мы создаем?
                                    </span>
                                  </p>
                                  <button className="absolute -top-2 -right-2 bg-[#1a1a1a]/90 hover:bg-[#2a2a2a]/90 backdrop-blur-sm border border-gray-600/30 rounded-lg p-1.5 shadow-lg transition-all duration-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-clipboard-copy w-3.5 h-3.5 text-gray-300 hover:text-gray-100 transition-colors"
                                      aria-hidden="true"
                                    >
                                      <rect
                                        width={8}
                                        height={4}
                                        x={8}
                                        y={2}
                                        rx={1}
                                        ry={1}
                                      />
                                      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                                      <path d="M16 4h2a2 2 0 0 1 2 2v4" />
                                      <path d="M21 14H11" />
                                      <path d="m15 10-4 4 4 4" />
                                    </svg>
                                  </button>
                                </div>
                                <div className="flex items-start justify-between w-full mt-2 text-xs">
                                  <span className="text-gray-400 font-medium">
                                    Первое сообщение
                                  </span>
                                  <div className="flex items-center gap-3">
                                    <div className="flex flex-col items-end justify-center">
                                      <span className="text-gray-400 text-xs">
                                        Неиспользованная версия сообщения
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end mb-6">
                              <div className="max-w-[85%] flex flex-col items-end">
                                <div className="relative bg-gradient-to-br from-primary-900/20 to-primary-800/10 border border-primary-500/30 rounded-2xl rounded-tr-sm p-4 shadow-lg">
                                  <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                                    <span>
                                      Привет, Sarah, Следуя за моим предыдущим
                                      сообщением о нашей платформе автоматизации
                                      рабочих процессов. Я хотел поделиться, что
                                      мы только что привлекли 3 новых
                                      корпоративных клиента в этом месяце,
                                      подняв наш ARR до $2.8M - рост на 22% с
                                      момента нашего последнего контакта. Мы
                                      также внедрили несколько{" "}
                                    </span>
                                    <span
                                      className="fact-reference cursor-pointer transition-all text-primary-400 hover:text-primary-300"
                                      title="View facts"
                                    >
                                      стратегий роста, ориентированных на
                                      продукт
                                    </span>
                                    <span>
                                      , которые вы обсуждали в своем докладе,
                                      что привело к увеличению органических
                                      регистраций на 40%. Учитывая ваш интерес
                                      к{" "}
                                    </span>
                                    <span
                                      className="fact-reference cursor-pointer transition-all text-primary-400 hover:text-primary-300"
                                      title="View facts"
                                    >
                                      проблемам автоматизации рабочих процессов
                                    </span>
                                    <span>
                                      {" "}
                                      и нашу ускоряющуюся траекторию роста, я бы
                                      хотел запланировать короткий звонок, чтобы
                                      изучить потенциальное соответствие с
                                      портфелем Sequoia. Были бы вы доступны для
                                      15-минутного разговора на следующей
                                      неделе?
                                    </span>
                                  </p>
                                  <button className="absolute -top-2 -right-2 bg-[#1a1a1a]/90 hover:bg-[#2a2a2a]/90 backdrop-blur-sm border border-gray-600/30 rounded-lg p-1.5 shadow-lg transition-all duration-300">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-clipboard-copy w-3.5 h-3.5 text-gray-300 hover:text-gray-100 transition-colors"
                                      aria-hidden="true"
                                    >
                                      <rect
                                        width={8}
                                        height={4}
                                        x={8}
                                        y={2}
                                        rx={1}
                                        ry={1}
                                      />
                                      <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                                      <path d="M16 4h2a2 2 0 0 1 2 2v4" />
                                      <path d="M21 14H11" />
                                      <path d="m15 10-4 4 4 4" />
                                    </svg>
                                  </button>
                                </div>
                                <div className="flex items-start justify-between w-full mt-2 text-xs">
                                  <span className="text-gray-400 font-medium">
                                    Последующее сообщение
                                  </span>
                                  <div className="flex items-center gap-3">
                                    <div className="flex flex-col items-end justify-center">
                                      <span className="text-gray-400 text-xs">
                                        Неиспользованная версия сообщения
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="h-full overflow-hidden w-80 flex-shrink-0"
                      style={{ opacity: 1, transform: "none" }}
                    >
                      <div
                        className="h-full flex flex-col gap-6 overflow-hidden relative"
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <div className="flex-shrink-0 flex flex-col bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-5 overflow-hidden relative z-10 min-h-[200px]">
                          <div className="space-y-3 flex-shrink-0">
                            <div className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center border border-primary-500/30">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-user w-6 h-6 text-primary-400"
                                  aria-hidden="true"
                                >
                                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                  <circle cx={12} cy={7} r={4} />
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <h3 className="text-lg font-semibold text-foreground">
                                    Sarah Mitchell
                                  </h3>
                                  <button
                                    className="p-1.5 rounded-md bg-[#2a2a2a] hover:bg-[#333333] text-gray-400 hover:text-primary-400 transition-colors"
                                    title="Перейти к профилю"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth={2}
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="lucide lucide-external-link w-4 h-4"
                                      aria-hidden="true"
                                    >
                                      <path d="M15 3h6v6" />
                                      <path d="M10 14 21 3" />
                                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    </svg>
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-3 pt-3 border-t border-[#2a2a2a]">
                              <div className="flex items-center gap-2">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-map-pin w-4 h-4 text-primary-400 flex-shrink-0"
                                  aria-hidden="true"
                                >
                                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                                  <circle cx={12} cy={10} r={3} />
                                </svg>
                                <span className="text-sm text-gray-300">
                                  San Francisco Bay Area
                                </span>
                              </div>
                            </div>
                            <div className="pt-3 border-t border-[#2a2a2a]">
                              <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-[#1a1a1a] hover:bg-[#252525] text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium">
                                <span>Почему этот профиль подходит вам?</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="lucide lucide-chevron-down w-4 h-4"
                                  aria-hidden="true"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="facts-block flex-1 flex flex-col min-h-0 bg-[#0f0f0f] border border-[#2a2a2a] rounded-xl p-5 relative z-0">
                          <div
                            className="flex items-center justify-between mb-4 cursor-pointer"
                            title="Hide validation reason"
                          >
                            <h2 className="text-2xl font-bold text-foreground hover:text-primary-400 transition-colors">
                              Факты
                            </h2>
                          </div>
                          <div className="flex-1 overflow-y-auto overflow-x-hidden space-y-2 scrollbar-hover">
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Партнер в Sequoia Capital, фокусируется на
                                      инвестициях в ранние SaaS стартапы
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                                      <a
                                        href="https://linkedin.com/in/sarah-ventures"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-external-link w-3 h-3"
                                          aria-hidden="true"
                                        >
                                          <path d="M15 3h6v6" />
                                          <path d="M10 14 21 3" />
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                        linkedin.com
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Недавно инвестировала в 3 B2B компании на
                                      основе AI в Q4 2024
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                                      <a
                                        href="https://techcrunch.com/sequoia-investments"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-external-link w-3 h-3"
                                          aria-hidden="true"
                                        >
                                          <path d="M15 3h6v6" />
                                          <path d="M10 14 21 3" />
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                        techcrunch.com
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      {`Основной докладчик на SaaStr Annual 2024
                                      на тему 'Будущее B2B SaaS'`}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                                      <a
                                        href="https://saastr.com/speakers"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-external-link w-3 h-3"
                                          aria-hidden="true"
                                        >
                                          <path d="M15 3h6v6" />
                                          <path d="M10 14 21 3" />
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                        saastr.com
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Опубликовала статью о мультипликаторах
                                      выручки в текущих рыночных условиях
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                                      <a
                                        href="https://medium.com/@sarah-ventures/saas-valuations-2024"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-external-link w-3 h-3"
                                          aria-hidden="true"
                                        >
                                          <path d="M15 3h6v6" />
                                          <path d="M10 14 21 3" />
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                        medium.com
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Выпускница Stanford GSB, бывший Product
                                      Manager в Google
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                                      <a
                                        href="https://linkedin.com/in/sarah-ventures"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-external-link w-3 h-3"
                                          aria-hidden="true"
                                        >
                                          <path d="M15 3h6v6" />
                                          <path d="M10 14 21 3" />
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                        linkedin.com
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Фокусируется на компаниях с ARR $1M-$5M,
                                      стремящихся к масштабированию
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Увлечена устойчивыми технологиями и
                                      климатическими решениями
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                                      <a
                                        href="https://twitter.com/sarah_ventures/climate-tech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-external-link w-3 h-3"
                                          aria-hidden="true"
                                        >
                                          <path d="M15 3h6v6" />
                                          <path d="M10 14 21 3" />
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                        twitter.com
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Ментор в Y Combinator, консультирует по
                                      стратегиям выхода на рынок
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                                      <a
                                        href="https://ycombinator.com/mentors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-external-link w-3 h-3"
                                          aria-hidden="true"
                                        >
                                          <path d="M15 3h6v6" />
                                          <path d="M10 14 21 3" />
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                        ycombinator.com
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Член совета директоров в 2 портфельных
                                      компаниях: DataFlow и CloudSync
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Недавно поделилась идеями о стратегиях
                                      роста, ориентированных на продукт
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                                      <a
                                        href="https://linkedin.com/posts/sarah-ventures-plg-insights"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-external-link w-3 h-3"
                                          aria-hidden="true"
                                        >
                                          <path d="M15 3h6v6" />
                                          <path d="M10 14 21 3" />
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                        linkedin.com
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Участвовала в панельной дискуссии на
                                      TechCrunch Disrupt 2024
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[#2a2a2a]">
                                      <a
                                        href="https://techcrunch.com/disrupt-2024"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1 transition-colors"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="lucide lucide-external-link w-3 h-3"
                                          aria-hidden="true"
                                        >
                                          <path d="M15 3h6v6" />
                                          <path d="M10 14 21 3" />
                                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        </svg>
                                        techcrunch.com
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div style={{ opacity: 1, transform: "none" }}>
                              <div className="relative">
                                <div className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl  bg-[#1a1a1a]/50 hover:bg-[#1a1a1a]/70 transition-colors overflow-hidden">
                                  <div>
                                    <p className="text-sm text-gray-300 leading-relaxed mb-2">
                                      Ищет компании, решающие проблемы
                                      автоматизации рабочих процессов
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl border-2 border-primary-500/30 shadow-2xl overflow-hidden p-8">
              <div className="text-center py-12">
                <div className="mb-6">
                  <svg
                    className="w-20 h-20 mx-auto text-primary-400 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Лучше просматривать на десктопе
                </h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  Интерактивное демо платформы оптимизировано для больших
                  экранов. Пожалуйста, откройте на десктопе или планшете для
                  полного опыта.
                </p>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  <a
                    href="/register"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Попробовать бесплатно
                  </a>
                  <p className="text-sm text-gray-500">
                    Или продолжайте прокручивать, чтобы узнать больше
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-primary-300/20 to-primary-500/20 rounded-3xl blur-xl -z-10 opacity-50" />
          </div>
          <div
            className="text-center mt-8 md:mt-12"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="text-gray-400 mb-4 text-sm md:text-base">
              Готовы усилить ваш аутрич?
            </p>
            <a
              href="/register"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-black font-semibold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors shadow-xl shadow-primary-500/20"
              tabIndex={0}
            >
              Попробуй бесплатно
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            style={{ opacity: 1, transform: "none" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-500 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                Наши преимущества
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Технологии для эффективного холодного аутрича
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="relative"
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                  isolation: "isolate",
                }}
              >
                <div
                  className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] h-full overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transform: "none",
                  }}
                >
                  <div style={{ transform: "translateZ(20px)" }}>
                    <div className="flex flex-col h-full">
                      <div className="mb-4 text-primary-400">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary-300">
                        Персонализация
                      </h3>
                      <p className="text-gray-300 mb-3 flex-grow leading-relaxed">
                        Персонализируем аутрич и повышаем конверсию до x10
                        <sup className="text-xs text-primary-400 ml-1">[1]</sup>
                      </p>
                      <div className="flex items-center gap-2 pt-3 border-t border-primary-500/20">
                        <svg
                          className="w-4 h-4 text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm text-gray-500 italic">
                          по сравнению со стандартными рассылками
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="relative"
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                  isolation: "isolate",
                }}
              >
                <div
                  className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] h-full overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transform: "none",
                  }}
                >
                  <div style={{ transform: "translateZ(20px)" }}>
                    <div className="flex flex-col h-full">
                      <div className="mb-4 text-primary-400">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary-300">
                        Детальное исследование
                      </h3>
                      <p className="text-gray-300 mb-3 flex-grow leading-relaxed">
                        Глубокое исследование фактов из нескольких открытых
                        источников
                      </p>
                      <div className="flex items-center gap-2 pt-3 border-t border-primary-500/20">
                        <svg
                          className="w-4 h-4 text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm text-gray-500 italic">
                          используя только открытые данные
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="relative"
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                  isolation: "isolate",
                }}
              >
                <div
                  className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] h-full overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transform: "none",
                  }}
                >
                  <div style={{ transform: "translateZ(20px)" }}>
                    <div className="flex flex-col h-full">
                      <div
                        className="mb-4 text-primary-400"
                        style={{ transform: "none" }}
                      >
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary-300">
                        Детальные отчёты
                      </h3>
                      <p className="text-gray-300 mb-3 flex-grow leading-relaxed">
                        Комплексные отчёты с найденными фактами для проверки
                      </p>
                      <div className="flex items-center gap-2 pt-3 border-t border-primary-500/20">
                        <svg
                          className="w-4 h-4 text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm text-gray-500 italic">
                          все данные проверены и структурированы
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="relative"
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                  isolation: "isolate",
                }}
              >
                <div
                  className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] h-full overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transform: "none",
                  }}
                >
                  <div style={{ transform: "translateZ(20px)" }}>
                    <div className="flex flex-col h-full">
                      <div
                        className="mb-4 text-primary-400"
                        style={{ transform: "none" }}
                      >
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary-300">
                        Высочайшее качество
                      </h3>
                      <p className="text-gray-300 mb-3 flex-grow leading-relaxed">
                        Факты высшего качества: минимизируем галлюцинации
                        сложными пайплайнами
                      </p>
                      <div className="flex items-center gap-2 pt-3 border-t border-primary-500/20">
                        <svg
                          className="w-4 h-4 text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm text-gray-500 italic">
                          многоуровневая проверка точности
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="relative"
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                  isolation: "isolate",
                }}
              >
                <div
                  className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] h-full overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transform: "none",
                  }}
                >
                  <div style={{ transform: "translateZ(20px)" }}>
                    <div className="flex flex-col h-full">
                      <div
                        className="mb-4 text-primary-400"
                        style={{ transform: "none" }}
                      >
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary-300">
                        Адаптивность
                      </h3>
                      <p className="text-gray-300 mb-3 flex-grow leading-relaxed">
                        Аутрич адаптируется под ваши задачи: опишите цель и
                        получите сообщения, ориентированные на её достижение
                      </p>
                      <div className="flex items-center gap-2 pt-3 border-t border-primary-500/20">
                        <svg
                          className="w-4 h-4 text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm text-gray-500 italic">
                          гибкая настройка под любую задачу
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <div
                className="relative"
                style={{
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                  isolation: "isolate",
                }}
              >
                <div
                  className="rounded-xl p-3 transition-all duration-300 relative bg-[#1a1a1a]/80 backdrop-blur-lg border border-[#2a2a2a] shadow-xl hover:shadow-2xl cursor-pointer hover:border-[#333333] h-full overflow-hidden"
                  style={{
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                    transform: "none",
                  }}
                >
                  <div style={{ transform: "translateZ(20px)" }}>
                    <div className="flex flex-col h-full">
                      <div
                        className="mb-4 text-primary-400"
                        style={{ transform: "none" }}
                      >
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-primary-300">
                        Быстро и эффективно
                      </h3>
                      <p className="text-gray-300 mb-3 flex-grow leading-relaxed">
                        Обрабатывайте сотни лидов быстро без потери качества
                      </p>
                      <div className="flex items-center gap-2 pt-3 border-t border-primary-500/20">
                        <svg
                          className="w-4 h-4 text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-sm text-gray-500 italic">
                          оптимизировано для масштаба
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center mt-16"
            style={{ opacity: 1, transform: "none" }}
          >
            <p className="text-gray-400 mb-4">
              Готовы трансформировать ваш аутрич?
            </p>
            <a
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500/10 border border-primary-500/30 rounded-lg text-primary-300 hover:bg-primary-500/20 transition-all"
              tabIndex={0}
              style={{ transform: "none" }}
            >
              Попробовать бесплатно
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section
        id="testimonials"
        className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]"
      >
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            style={{ opacity: 1, transform: "none" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-400">
              Нам доверяют компании
            </h2>
            <p className="text-xl text-gray-400">
              Работаем с ведущими компаниями
            </p>
          </div>
          <div
            className="mb-16 flex justify-center"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#252525] border-2 border-primary-500/30 rounded-2xl px-12 py-8 shadow-2xl shadow-primary-500/10">
              <div className="flex items-center gap-4">
                <svg
                  className="w-12 h-12 text-primary-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div>
                  <p className="text-sm text-gray-400 uppercase tracking-wider mb-1">
                    Создано на базе
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                    Microsoft Azure для стартапов
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <a
              href="https://thelinksocial.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a]/60 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-8 text-center hover:border-primary-500/30 transition-all duration-300 cursor-pointer block"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative w-32 h-16 flex items-center justify-center">
                  <img
                    alt="TheLinkSocial Logo"
                    loading="lazy"
                    width={128}
                    height={64}
                    decoding="async"
                    data-nimg={1}
                    className="object-contain max-w-full max-h-full drop-shadow-[0_4px_12px_rgba(193,160,115,0.3)]"
                    srcSet="/_next/image?url=%2Flinksocial_logo.png&w=128&q=75 1x, /_next/image?url=%2Flinksocial_logo.png&w=256&q=75 2x"
                    src="/_next/image?url=%2Flinksocial_logo.png&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
                <p className="text-xl font-semibold text-primary-300">
                  TheLinkSocial
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-2">thelinksocial.com</p>
            </a>
            <a
              href="https://azalia.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a]/60 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-8 text-center hover:border-primary-500/30 transition-all duration-300 cursor-pointer block"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative w-32 h-16 flex items-center justify-center">
                  <img
                    alt="Azalia AI Logo"
                    loading="lazy"
                    width={128}
                    height={64}
                    decoding="async"
                    data-nimg={1}
                    className="object-contain max-w-full max-h-full drop-shadow-[0_4px_12px_rgba(193,160,115,0.3)]"
                    srcSet="/_next/image?url=%2Fazalia_logo.png&w=128&q=75 1x, /_next/image?url=%2Fazalia_logo.png&w=256&q=75 2x"
                    src="/_next/image?url=%2Fazalia_logo.png&w=256&q=75"
                    style={{ color: "transparent" }}
                  />
                </div>
                <p className="text-xl font-semibold text-primary-300">
                  Azalia AI
                </p>
              </div>
              <p className="text-sm text-gray-500 mt-2">azalia.ai</p>
            </a>
          </div>
        </div>
      </section>
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className="text-center mb-16"
            style={{ opacity: 1, transform: "none" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-500 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                Наши цены
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-6">
              Выберите план, который подходит вам
            </p>
          </div>
          <div className="relative" style={{ opacity: 1, transform: "none" }}>
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 scale-50 md:scale-100"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="inline-flex flex-col items-center gap-2 bg-gradient-to-r from-primary-500/10 to-primary-400/10 border border-primary-500/30 rounded-xl px-6 py-4 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span style={{ transform: "scale(1.01532)" }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-flame w-5 h-5 text-primary-400"
                      aria-hidden="true"
                    >
                      <path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" />
                    </svg>
                  </span>
                  <span className="text-primary-300 font-semibold">
                    Ограниченное предложение
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary-400">
                      0
                    </span>
                    <span className="text-gray-500 text-xs">days</span>
                  </div>
                  <span className="text-primary-400">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary-400">
                      0
                    </span>
                    <span className="text-gray-500 text-xs">hours</span>
                  </div>
                  <span className="text-primary-400">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary-400">
                      0
                    </span>
                    <span className="text-gray-500 text-xs">min</span>
                  </div>
                  <span className="text-primary-400">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary-400">
                      0
                    </span>
                    <span className="text-gray-500 text-xs">sec</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-primary-300/20 to-primary-500/20 rounded-3xl blur-2xl opacity-50" />
            <div className="relative bg-[#1a1a1a]/60 backdrop-blur-lg border border-primary-500/20 rounded-2xl p-8 shadow-2xl overflow-x-hidden overflow-y-visible">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-primary-500/5 pointer-events-none" />
              <div className="relative overflow-x-hidden">
                <div
                  className="w-full relative flex items-center justify-center"
                  style={{ height: "380.417px", overflow: "hidden" }}
                >
                  <canvas
                    width={2400}
                    height={1000}
                    style={{
                      display: "block",
                      width: 1200,
                      height: 500,
                      transform: "scale(0.760833)",
                      transformOrigin: "center center",
                      cursor: "default",
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="mt-4 md:-mt-24 lg:-mt-62 flex justify-center"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-[#1a1a1a]/90 to-[#262626]/90 border border-primary-500/30 rounded-2xl px-8 py-6 backdrop-blur-sm shadow-2xl">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-primary-400 via-primary-300 to-primary-400 bg-clip-text text-transparent">
                  Нужно больше лидов в вашу воронку?
                </h3>
                <div className="relative w-64 h-40">
                  <svg
                    className="absolute top-0 left-0 w-full h-32 pointer-events-none"
                    viewBox="0 0 256 128"
                  >
                    <path
                      d="M 28 118 A 100 100 0 0 1 228 118"
                      fill="none"
                      stroke="rgba(58, 52, 45, 0.6)"
                      strokeWidth={16}
                      strokeLinecap="round"
                    />
                    <path
                      d="M 28 118 A 100 100 0 0 1 128 18"
                      fill="none"
                      stroke="url(#speedometer-gradient)"
                      strokeWidth={16}
                      strokeLinecap="round"
                      style={{
                        filter:
                          "drop-shadow(rgba(193, 160, 115, 0.6) 0px 0px 8px)",
                      }}
                    />
                    <defs>
                      <linearGradient
                        id="speedometer-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#c1a073" />
                        <stop offset="50%" stopColor="#d4c5b0" />
                        <stop offset="100%" stopColor="#c9ad83" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute" style={{ left: 28, top: 118 }}>
                    <button
                      className="relative group cursor-pointer p-3"
                      aria-label="Select 150 лидов"
                      style={{ transform: "translate(-50%, -50%)" }}
                    >
                      <div className="relative w-4 h-4 rounded-full border-2 transition-all bg-primary-400/60 border-primary-500/40 group-hover:scale-110" />
                      <div
                        className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-semibold transition-all text-primary-400/80 group-hover:text-primary-300"
                        style={{ textShadow: "none" }}
                      >
                        100
                      </div>
                    </button>
                  </div>
                  <div className="absolute" style={{ left: 128, top: 18 }}>
                    <button
                      className="relative group cursor-pointer p-3"
                      aria-label="Select 700 лидов"
                      style={{ transform: "translate(-50%, -50%)" }}
                    >
                      <div className="absolute inset-0 w-8 h-8 bg-primary-400/40 rounded-full blur-lg" />
                      <div className="relative w-4 h-4 rounded-full border-2 transition-all bg-white border-primary-300 shadow-lg shadow-primary-400/50 scale-125" />
                      <div
                        className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-semibold transition-all text-white scale-110"
                        style={{
                          textShadow: "rgba(193, 160, 115, 0.8) 0px 0px 8px",
                        }}
                      >
                        1K
                      </div>
                    </button>
                  </div>
                  <div className="absolute" style={{ left: 228, top: 118 }}>
                    <button
                      className="relative group cursor-pointer p-3"
                      aria-label="Select 2 000 лидов"
                      style={{ transform: "translate(-50%, -50%)" }}
                    >
                      <div className="relative w-4 h-4 rounded-full border-2 transition-all bg-primary-400/60 border-primary-500/40 group-hover:scale-110" />
                      <div
                        className="absolute top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-semibold transition-all text-primary-400/80 group-hover:text-primary-300"
                        style={{ textShadow: "none" }}
                      >
                        10K
                      </div>
                    </button>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-0 pointer-events-none">
                    <div className="text-center mt-0">
                      <div
                        className="text-xl font-bold bg-gradient-to-r from-primary-400 via-white to-primary-400 bg-clip-text text-transparent mb-1"
                        style={{
                          textShadow: "rgba(193, 160, 115, 0.6) 0px 0px 12px",
                        }}
                      >
                        700 лидов
                        <sup className="text-xs text-primary-400 ml-1">[2]</sup>
                      </div>
                      <div className="text-base font-semibold text-primary-400/90 mt-1">
                        10 000₽
                      </div>
                      <div className="text-xs text-primary-400/70 mt-1">
                        в месяц
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="text-center mt-8"
            style={{ opacity: 1, transform: "none" }}
          >
            <div className="inline-block" tabIndex={0}>
              <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 focus:ring-secondary-500 shadow-lg shadow-secondary-500/20 px-4 py-2 text-base min-w-[200px]">
                Посмотреть все тарифы
              </button>
            </div>
          </div>
          <div
            className="text-center mt-8"
            style={{ opacity: 1, transform: "none" }}
          >
            <a href="/register">
              <div className="inline-block" tabIndex={0}>
                <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary-500 to-primary-400 text-[#1a1a1a] font-semibold hover:from-primary-400 hover:to-primary-300 focus:ring-primary-500 shadow-lg shadow-primary-500/20 px-6 py-3 text-lg min-w-[200px]">
                  Начать бесплатный пробный период
                  <svg
                    className="w-4 h-4 ml-2 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </div>
          <div className="text-center mt-12" style={{ opacity: 1 }}>
            <p className="text-gray-500 mb-4">
              Нужен индивидуальный план?{" "}
              <a
                href="mailto:support@catchy-me.com"
                className="text-primary-400 hover:text-primary-300 transition-colors underline decoration-primary-500/30"
              >
                Свяжитесь с нами
              </a>
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg
                  className="w-5 h-5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Безопасная оплата</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg
                  className="w-5 h-5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span>Мгновенная доставка</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <svg
                  className="w-5 h-5 text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Поддержка 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent to-[#0a0a0a]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div style={{ opacity: 1, transform: "none" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary-500 via-primary-300 to-primary-500 bg-clip-text text-transparent">
              Готовы увеличить конверсию холодного аутрича?
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              Начните использовать catchy-me сегодня и получите
              персонализированные сообщения, которые работают
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="/register">
                <div
                  className="inline-block"
                  tabIndex={0}
                  style={{ transform: "none" }}
                >
                  <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r from-primary-500 to-primary-400 text-[#1a1a1a] font-semibold hover:from-primary-400 hover:to-primary-300 focus:ring-primary-500 shadow-lg shadow-primary-500/20 px-6 py-3 text-lg min-w-[200px]">
                    Попробуй бесплатно сегодня
                  </button>
                </div>
              </a>
              <a href="/?login=true">
                <div className="inline-block" tabIndex={0}>
                  <button className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed bg-transparent text-gray-300 hover:bg-[#2a2a2a] focus:ring-gray-600 border border-[#333333] px-6 py-3 text-lg min-w-[200px]">
                    Войти
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
