// 'use client'
// import { useState } from "react";

// /**
//  * ModsShowcase – 各 Mod の概要を切り替えながら表示するセクション。
//  *
//  * 使い方:
//  * <ModsShowcase /> をページ内の好きな場所に配置。
//  * 画像パスと説明文は mods 配列を編集して追加していく。
//  */
// export default function ShowMods() {
//   type Mod = {
//     id: string;
//     name: string;
//     image: string;
//     description: string;
//   };

//   const mods: Mod[] = [
//     {
//       id: "resistance",
//       name: "Resistance",
//       image: "/newbie_dynamics_seal_bgremoved.png", // public/images/… に配置
//       description:
//         "レジスタンスの勢力や武装の力を体験できるMod。",
//     },
//     {
//       id: "pirates",
//       name: "Pirates",
//       image: "/newbie_dynamics_seal_bgremoved.png",
//       description:
//         "大海賊時代をテーマにした冒険 Mod。プレイヤーが造船・砲撃など磨いた技術を総動員して争う。",
//     },
//     // ここに追加していけば良い
//   ];

//   const [current, setCurrent] = useState<Mod>(mods[0]);

//   return (
//     <section className="w-full bg-neutral-800 flex flex-col items-center py-24 gap-10">
//       <div className="w-80 h-80 overflow-hidden flex items-center justify-center rounded-xl shadow-lg"></div>
//         {/* 選択中 Mod の画像 */}
//         <img
//           src={current.image}
//           alt={current.name}
//           className="max-w-full max-h-full object-contain"
//         />
//       <div />

//       {/* Mod 選択パネル (平行四辺形タブ) */}
//       <nav className="flex flex-wrap justify-center gap-4">
//         {mods.map((m) => {
//           const selected = current.id === m.id;
//           return (
//             <button
//               key={m.id}
//               onClick={() => setCurrent(m)}
//               className={`relative transform -skew-x-12 w-44 h-12 border border-[#00FF7F] transition-colors duration-300 ${
//                 selected
//                   ? "bg-[#00FF7F]"
//                   : "bg-transparent hover:bg-[#00FF7F]"
//               }`}
//             >
//               <span className="block skew-x-12 font-semibold tracking-wide text-white whitespace-nowrap">
//                 {m.name}
//               </span>
//             </button>
//           );
//         })}
//       </nav>

//       {/* --- 紹介文 (高さ固定 10rem) --- */}
//       <article className="w-10/12 sm:w-3/4 md:w-1/2 text-white space-y-4 min-h-[10rem]">
//         <h2 className="text-3xl font-bold border-b border-[#00FF7F] pb-2">
//           {current.name}
//         </h2>
//         <p className="text-sm leading-relaxed">{current.description}</p>
//       </article>
//     </section>
//   );
// }


'use client'
import { useState } from "react";

/**
 * ModsShowcase – 幅を全体 32 rem（512 px）に統一しつつ、
 * 説明文ボックスだけ 28 rem（448 px）まで絞ったバージョン。
 */
export default function ModsShowcase() {
  type Mod = {
    id: string;
    name: string;
    image: string;
    description: string;
  };

  const mods: Mod[] = [
    {
      id: "resistance",
      name: "Resistance Mod",
      image: "/resi.png",
      description:
        "レジスタンスの勢力や武装を導入するMod。愛と勇気と小型デバイスを手に戦うことができる。",
    },
    {
      id: "pirates",
      name: "Pirates Rush",
      image: "/newbie_dynamics_seal_bgremoved.png",
      description:
        "大海賊時代をテーマにした冒険 Mod。プレイヤーは破壊と略奪の限りを尽くし、造船・砲撃などの磨いた技術を総動員して争う。",
    },
  ];

  const [current, setCurrent] = useState<Mod>(mods[0]);

  return (
    <section className="w-full bg-[#0e151e] flex flex-col items-center py-24 gap-8">
      {/* --- 画像 (正方形 20rem) --- */}
      <div className="w-[64rem] h-80 overflow-hidden flex items-center justify-center rounded-xl shadow-lg">
        <img
          src={current.image}
          alt={current.name}
          className="object-contain"
        />
      </div>

      {/* --- タブコンテナ (32rem 固定) --- */}
      <nav className="w-[64rem] flex flex-wrap justify-center gap-2">
        {mods.map((m) => {
          const selected = current.id === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setCurrent(m)}
              className={`relative transform -skew-x-12 w-44 h-12 border border-[#00FF7F] transition-colors duration-300 ${
                selected ? "bg-[#00FF7F]" : "bg-transparent hover:bg-[#00FF7F]"
              }`}
            >
              <span className="block skew-x-12 font-semibold tracking-wide text-white text-sm pointer-events-none">
                {m.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* --- 説明ボックス (28rem 幅, 高さ 10rem) --- */}
      <article className="w-[28rem] h-40 text-white space-y-3 overflow-auto">
        <h2 className="text-2xl font-bold border-b border-[#00FF7F] pb-1">
          {current.name}
        </h2>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">
          {current.description}
        </p>
      </article>
    </section>
  );
}

