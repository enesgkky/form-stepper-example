# Form Stepper Example

![Form Stepper](https://user-images.githubusercontent.com/your-image.png)

Form adımlama yapısını yönetmek için geliştirilmiş modern ve şık bir React uygulaması.

## 🚀 Teknolojiler

Bu proje aşağıdaki teknolojileri kullanarak geliştirilmiştir:

- ⚡ **React** – Kullanıcı arayüzü için
- ⚡ **Vite** – Hızlı geliştirme ortamı için
- ⚡ **TypeScript** – Tip güvenliği için
- 🎨 **TailwindCSS** – Esnek ve modern tasarım için
- 🎨 **shadcn/ui** – Önceden hazırlanmış UI bileşenleri için
- ✅ **Formik** – Form yönetimi için
- ✅ **Yup** – Form doğrulama için

## 📸 Önizleme

![Form Stepper Demo](https://user-images.githubusercontent.com/your-demo.gif)

## 📦 Kurulum

Projeyi çalıştırmak için aşağıdaki adımları takip edebilirsin:

```bash
git clone https://github.com/username/form-stepper-example.git
cd form-stepper-example
yarn install # veya npm install
yarn dev # veya npm run dev
```

## 🛠️ Özellikler

✅ Adım adım form yönetimi (Stepper yapısı)  
✅ Dinamik doğrulama kuralları (Formik & Yup)  
✅ Modern ve şık UI bileşenleri  
✅ Hızlı ve optimize geliştirme (Vite)  
✅ TailwindCSS ile özelleştirilebilir tema  

## 📝 Kullanım

Form, belirli adımlara göre ilerler ve her adımda farklı doğrulama kurallarını uygular.  
Örneğin, **4. adımda dosya yükleme zorunlu hale gelir.**

```tsx
<Formik
  initialValues={{ step: 1, file: null }}
  validationSchema={validationSchema}
  onSubmit={(values) => console.log(values)}
>
  {({ setFieldValue, errors, touched, values }) => (
    <Form>
      {values.step === 4 && (
        <div>
          <input
            type="file"
            onChange={(event) => setFieldValue('file', event.currentTarget.files[0])}
          />
          {errors.file && touched.file && <div>{errors.file}</div>}
        </div>
      )}
      <button type="button" onClick={() => setFieldValue('step', values.step + 1)}>
        Sonraki Adım
      </button>
      {values.step === 4 && <button type="submit">Gönder</button>}
    </Form>
  )}
</Formik>
```

## 🌟 Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz, **pull request** açabilirsiniz. Hataları bildirmek için [issues](https://github.com/username/form-stepper-example/issues) sekmesini kullanabilirsiniz.

---

**📌 Repo:** [form-stepper-example](https://github.com/enesgkky/form-stepper-example)  
**🚀 Geliştirici:** [@enesgkky](https://github.com/enesgkky)

