<template>
  <div>
    <Grid>
      <GridCell :col="1" :row="1" :left="0">
        <Avatar></Avatar>
      </GridCell>
      <GridCell :col="1" :row="1" :left="1"></GridCell>
      <GridCell :col="1" :row="1" :top="1"></GridCell>
      <GridCell :col="1" :row="1" :top="2"></GridCell>
      <Grid :col="4" :row="3" :left="2" :isGrid="false">
        <GridCell :col="2" :row="2" :left="0">
          <Avatar></Avatar>
        </GridCell>
        <GridCell :col="1" :row="1" :left="2"></GridCell>
        <GridCell :col="1" :row="1" :top="2" :left="1"></GridCell>
        <GridCell :col="1" :row="1" :top="0" :left="3"></GridCell>
      </Grid>
    </Grid>
  </div>
</template>

<script setup lang="ts" name="Home">
</script>

<style scoped></style>
