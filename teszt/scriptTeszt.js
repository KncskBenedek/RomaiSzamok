QUnit.module("Római SZámok", function () {
  QUnit.test("1 római értéke", function (assert) {
    assert.equal(romaiAlakit([1]), "I");
  });
  QUnit.test("3 római értéke", function (assert) {
    assert.equal(romaiAlakit([3]), "III");
  });

  QUnit.test("5 római értéke", function (assert) {
    assert.equal(romaiAlakit([5]), "V");
  });

  QUnit.test("9 római értéke", function (assert) {
    assert.equal(romaiAlakit([9]), "IX");
  });

  QUnit.test("10 római értéke", function (assert) {
    assert.equal(romaiAlakit([0, 1]), "X");
  });

  QUnit.test("99 római értéke", function (assert) {
    assert.equal(romaiAlakit([9, 9]), "XCIX");
  });
  QUnit.test("100 római értéke", function (assert) {
    assert.equal(romaiAlakit([0, 0, 1]), "C");
  });

  QUnit.test("5000 római értéke", function (assert) {
    assert.equal(romaiAlakit([0, 0, 0, 5]), "ↁ");
  });

  QUnit.test("lebolt 10-es értékkel", function (assert) {
    assert.equal(lebont("10").join(""), "01");
  });

  QUnit.test("lebolt 1675-es értékkel", function (assert) {
    assert.equal(lebont("1675").join(""), "5761");
  });
  QUnit.test("üres tömb", function (assert) {
    assert.equal(romaiAlakit([]), "Hiba");
  });
  QUnit.test("Érték a lebont metódusban kisseb mint nulla", function (assert) {
    assert.equal(lebont("-1").join(""), "");
  });

  QUnit.test("Érték a lebont metódusban nulla", function (assert) {
    assert.equal(lebont("0").join(""), "");
  });
});
