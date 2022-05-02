const { string } = require("prop-types");

module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      rows: string,
      columns: string,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tutorial = mongoose.model("tutorial", schema);
  return Tutorial;
};
