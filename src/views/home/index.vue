<template>
  <div style="display: flex; gap: 20px;">
    <Grid>
      <GridCell :col="2" :row="2">
        <Avatar src="/res/img/lufei.jfif"></Avatar>
      </GridCell>
      <GridCell :left="2" :top="0" :col="5" :row="2">
        <Banner ref="bannerRef"></Banner>
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
        <Theme :callBack="switchTheme"></Theme>
      </GridCell>
    </Grid>
    <Grid>
      <Grid :left="0" :top="0" :col="4" :row="2">
        <GridCell :col="1" :row="1">
          <Avatar src="/res/img/lufei.jfif"></Avatar>
        </GridCell>
        <GridCell :left="1" :col="1" :row="1">
        </GridCell>
        <GridCell :left="2" :col="1" :row="1">
        </GridCell>
        <GridCell :left="3" :col="1" :row="1">
        </GridCell>
      </Grid>
    </Grid>
  </div>
</template>

<script setup lang="ts" name="Home">
const bannerRef = ref()
const switchTheme = () => {
  bannerRef.value.reload()
}
</script>

<style scoped></style>
