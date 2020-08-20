/** 
@param {number} height height in cm
@param {number} weight weight in kg
@returns {number} body mass index 
**/

function getBmi(height, weight) {
  let bmi = (weight / Math.pow(height, 2.5)) * 1.3;
  bmi = bmi.toFixed(1);
  return bmi;
}

$(document).ready(function () {
  // all jQuery code goes here

  $("#calculate").click(function () {
    let weight = Number($("#weight").val());
    console.log(weight);
    let height = Number($("#height").val());
    console.log(height, "height");
    result = getBmi(height, weight);

    $("#bmi_result").html(result);
    console.log(bmi, "bmi");
  });

  /**
   * Calculate upper and lower bouds of the normal weight.
   * @param {Number} value Person's height in cm
   * @param {Number} factor 18.5 >>lower bound, 24.9 >> upper bound
   * @returns {Number} Normal weight bound as integer.
   */

  // function getWeightLimit(value, factor) {
  //   let limit = (factor / 1.3) * Math.pow(value / 100, 2.5);
  //   limit = limit.toFixed(0);
  //   return limit;
  // }

  let bmi = getBmi(height, weight);
});
