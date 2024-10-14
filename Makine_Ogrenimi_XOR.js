const tf = require('@tensorflow/tfjs'); 

const model = tf.sequential(); // Modeli oluşturduk
model.add(tf.layers.dense({ units: 4, inputShape: [2], activation: 'relu' })); // 2 Girdili 4 Birim Ekliyoruz
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' })); // sigmoid [0,1] arasında Çıktı verir.
model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy' }); // ADMA ile Derledik. 

const Girdiler = tf.tensor2d([[0, 0], [0, 1], [1, 0], [1, 1]]);
const Ciktilar = tf.tensor2d([[0], [1], [1], [0]]); // Girdi ve Çıktıları TensorFlow formatına çevirdik.

(async () => { //async-await ile Modelin Eğitimini bekliyoruz.
  await model.fit(Girdiler, Ciktilar, {
    epochs: 1000,  // Eğitim döngüsü sayısı
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(`Epoch: ${epoch}, Loss: ${logs.loss}`);
      }
    }
  });
  
  model.predict(tf.tensor2d([[0, 1]])).print();  // Çıktıyı tahmin ediyoruz.
})();
