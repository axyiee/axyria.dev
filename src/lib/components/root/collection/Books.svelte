<script lang="ts">
  import type { LocaleDefinition } from "$lib/locale";
  import Book from "../Book.svelte";

  export let locale: LocaleDefinition;

  const books = [
    {
      href: "https://softwarefoundations.cis.upenn.edu/",
      name: "Software Foundations, Benjamin C. Pierce",
      key: "sf",
      picture: "https://freecomputerbooks.com/covers/Software-Foundations.png",
    },
    {
      href: "https://craftinginterpreters.com/",
      name: "Crafting Interpreters, Robert Nystrom",
      key: "ci",
      picture:
        "https://m.media-amazon.com/images/I/61C0gyqOswL._AC_UF1000,1000_QL80_.jpg",
    },
    // {
    //   href: "https://www.muriloleal.com.br/visao/repositorio/unijua/lfa//Livro%20-%20Linguagens%20Formais%20e%20Aut%C3%B4matos.pdf",
    //   name: "Linguagens Formais e Autômatos, P. Blauth Menezes",
    //   key: "linguagensFormais",
    //   picture: "OL9156862M"
    // },
  ];
</script>

<ul>
  <ul>
    {#each books as book}
      <Book
        href={book.href}
        name={book.name}
        picture={book.picture}
        key={book.key}
        {locale}
      />
    {/each}
  </ul>
</ul>

<style>
  ul {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    gap: 1rem;
  }
</style>
