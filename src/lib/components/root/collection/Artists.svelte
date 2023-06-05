<script lang="ts">
  import type { LocaleDefinition } from "$lib/locale";
  import Artist from "../Artist.svelte";

  export let locale: LocaleDefinition;

  const artists = [
    {
      href: "https://psychoangel.bandcamp.com",
      name: "psychoangel",
      key: "psychoangel",
      picture:
        "https://yt3.googleusercontent.com/aomrFnmIMSpGMCJ1UoSmepFIUIfxByNJO88krrAfUNVbtxWWZPxQvTIB-HWnwU_NmZAgPEBKSA=s400-c-k-c0x00ffffff-no-rj",
      flag: "uk",
    },
    {
      href: "https://yuce0903.bandcamp.com/",
      name: "YUC'e",
      key: "yuce",
      picture: "https://f4.bcbits.com/img/0030918339_21.jpg",
      flag: "japan",
    },
    {
      href: "https://www.youtube.com/@igusuri_please",
      name: "iyowa",
      key: "iyowa",
      picture:
        "https://yt3.googleusercontent.com/ytc/AGIKgqOAD54-bJKefHL3Itz_PHBMeY3vSwA3KEpMPB8d=s400-c-k-c0x00ffffff-no-rj",
      flag: "japan",
    },
    {
      href: "https://www.youtube.com/@kikuo_sound/",
      name: "Kikuo",
      key: "kikuo",
      flag: "japan",
      picture:
        "https://yt3.googleusercontent.com/ytc/AGIKgqMFpFfFBqwwgMMnqBV5KvFEpNACQ5mnuIcQNirCdw=s400-c-k-c0x00ffffff-no-rj",
    },
    {
      href: "https://glassbeach.bandcamp.com/",
      name: "glass beach",
      key: "glassBeach",
      flag: "usa",
      picture:
        "https://yt3.googleusercontent.com/ytc/AGIKgqM_7LA9MKMGLiJC88b_9m5hAi_1A-Tvg-q1OBzm=s400-c-k-c0x00ffffff-no-rj",
    },
    {
      href: "https://en.wikipedia.org/wiki/Ant%C3%B4nio_Carlos_Jobim",
      name: "Antônio Carlos Jobim",
      key: "tom",
      flag: "brazil",
      picture:
        "https://yt3.googleusercontent.com/ytc/AGIKgqNd13gBrC66N6nzCVwstKPyNNbNtAGjt4lqTkBy=s400-c-k-c0x00ffffff-no-rj",
    },
    {
      href: "https://en.wikipedia.org/wiki/Chico_Buarque",
      name: "Chico Buarque",
      key: "chico",
      flag: "brazil",
      picture:
        "https://yt3.googleusercontent.com/p6MIC6egyHAnsXbm6sinNRegNLDIHBAlrz4k8cg1WrF9QmaMmp7XAPpSetYZCzOpl8meEzpZ1A=s400-c-k-c0x00ffffff-no-rj",
    },
  ];
</script>

<ul>
  <ul>
    {#each artists as artist}
      <Artist
        href={artist.href}
        name={artist.name}
        flag={artist.flag}
        picture={artist.picture}
        key={artist.key}
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
