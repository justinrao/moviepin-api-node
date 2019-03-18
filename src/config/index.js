module.exports = {
  port: process.env.PORT || 5000,
  dbUrl: `mongodb+srv://atlasAdmin:${process.env.MONGO_ATLAS_PW}@clustor0-udwax.mongodb.net/moviepin?retryWrites=true`
}