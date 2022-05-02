module.exports = (mongoose) => {
  var ColumnSchema = mongoose.Schema(
    {
      id: Number,
      imgURL: String,
      colName: String,
    },
    { timestamps: true }
  );

  ColumnSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", ColumnSchema);
  return Tutorial;
};
