<template>
  <div>
    <Grid>
      <GridCell :col="2" :row="2">
        <Avatar src="/res/img/lufei.jfif"></Avatar>
      </GridCell>
      <GridCell :left="2" :top="0" :col="5" :row="2">
        <Banner></Banner>
      </GridCell>
      <GridCell :left="0" :top="2" :col="1" :row="1">
        <Avatar src="/res/img/xiaoxin.png"></Avatar>
      </GridCell>
      <GridCell :left="1" :top="2" :col="1" :row="1">
        <Avatar src="/res/img/xiaoxin2.png"></Avatar>
      </GridCell>
      <GridCell :left="2" :top="2" :col="1" :row="1"></GridCell>
      <GridCell :left="3" :top="2" :col="1" :row="1"></GridCell>
      <GridCell :left="4" :top="2" :col="1" :row="1"></GridCell>
      <GridCell :left="5" :top="2" :col="1" :row="1">
      </GridCell>
      <GridCell :noBg="true" :left="6" :top="2" :col="1" :row="1">
        <Theme></Theme>
      </GridCell>
    </Grid>
  </div>
</template>

<script setup lang="ts" name="Home">
</script>

<style scoped></style>
