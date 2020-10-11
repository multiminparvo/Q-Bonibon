# Q-Bonibon
Özet

Projemizin amacı  kuantum kapılarını interaktif bir şekilde öğretmektir.  Kullanıcılar altın küplerini kazanmak için ekranda gösterilen durumları kuantum kapılarılarıyla değiştirerek hedefe ulaşmaya çalışıyorlar. Bunu başaranlar süreci tamamlamış oluyor.

Açıklama

İlk aşama olarak temel seviye 4 kapı (X, Y, Z, H) kullanma imkanı sağlayarak, başlangıç aşamasındaki görsele değişiklik yapma imkanı sağladık. Her bir kapı devrenin o anki durumuna etki ederek bir sonraki aşamasını hesaplıyor ve görseli gösteriyor. 

İnteraktif eğitimi daha keyifli yapmak için oyunlaştırma yaptık. Kullanıcıya bir hedef şekil gösterip, kapıları kullanarak o şekle ulaşmaya çalışmasını sağladık. Hedef olarak görsel ALTIN kullandık. Oyun kazanıldığında ise yukarıdan altınlar yağarak teşvik mekanizmasını güçlendiriyor. 

Uygulamamıza ekstra bilgi öğrenmek isteyenler için Bilgi Köşesi ekledik. Tek tık ile Kapılar hakkında kısa bilgiye erişilebilir ve istenirse ek okumalar için ilgili linklere yönlendirilebilir.

Kullandığımız görselleri şuanki aşamada kendi oluşturduğumuz çıktılardan sağladık. Uygulamayı daha dinamik ve akıcı hale getirmek için bir Flask Rest API yazdık. Bu API, python qiskit serverına bağlanıp girdilere göre devre oluşturuyor ve o anki sonucun görselini bize döndürüyor. 

Uygulamayı görsellik açısından daha fazla etkileşimli yapmak için bir sonraki aşama olarak 3D kütüphaneler ekleyip, devrelerin ve kürelerin değişikliğe açık yapacağız. Bunun da interaktifliği artıracağını umuyoruz. İlerleyen süreçte bu uygulamayı VR veya AR uygulamalarıyla farklı zeminlere de taşımayı planlıyoruz

Takım Üyeleri
@abdullahyldz | Abdullah Yıldız
@multiminparvo | Veli Can Ünal 

Github Bağlantı
https://github.com/multiminparvo/Q-Bonibon

