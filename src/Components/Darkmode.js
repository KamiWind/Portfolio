import React from 'react'


/* --------[ Só Adicionar darl:(e oque quer com darkmode dentro da classe) ]-------- */


export default function DarkMode() {
    const [darkToggle, setDarkToggle] = React.useState(false)
    return (
      <div
        class={`h-screen w-full bg-gray-300 ${
          darkToggle && "dark"
        }`}
      >
        <label class="toggleDarkBtn">
          <input type="checkbox" onClick={() => setDarkToggle(!darkToggle)} />
          <span class="slideBtnTg round">Dark Mode</span>
        </label>
        <div class="dark:bg-black dark:text-slate-50">Testando o dark mode</div>
      </div>
    );
}
