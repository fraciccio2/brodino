# 🎬 Cartella Video dello Scrittore

Inserisci qui il video di auguri personalizzato registrato dallo scrittore:
- **Orientamento**: Verticale (9:16, formato smartphone / Reel / Story)
- **Nome file predefinito**: `birthday-message.mp4`
- **Immagine poster/anteprima**: `birthday-message-poster.jpg` (in orientamento verticale)

Consigli di ottimizzazione web (come da specifica):
- Codec: H.264 / AAC
- Risoluzione consigliata: 1080x1920 (Full HD verticale) o 720x1280
- Bitrate moderato (2.5 - 5 Mbps per garantire avvio istantaneo e fluido)

I percorsi sono configurati in `src/data/birthday.ts` sotto `video`:
```typescript
video: {
  src: "/video/birthday-message.mp4",
  poster: "/photos/birthday-message-poster.jpg",
  ...
}
```
