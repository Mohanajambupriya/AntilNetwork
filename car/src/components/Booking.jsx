import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Booking.css'; // Make sure to create this CSS file for styling
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Adjust path if necessary

const carData = [
    { id: 1, name: "Toyota Camry", price: 25000, fuel: "Petrol", image: "https://media.rti.toyota.com/config/pub/3d/vcr/live/vehicle/TOY/2025/camry/2561/764/c37ceefc42a138705c8b9bfdc3b2f2c0cfd8a032b35ac1724984c5cb4cd41ec4.png?fit=crop&wid=1200&hei=663&efcview=Exterior&bfc=off&fmt=png-alpha" },
    { id: 2, name: "Honda Civic", price: 23000, fuel: "Petrol", image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Honda-Civic-2006-2010/284/1561025917617/front-left-side-47.jpg" },
    { id: 3, name: "Tesla Model 3", price: 45000, fuel: "Electric", image: "https://www.edmunds.com/assets/m/cs/bltf2f4d0ddb400d35c/6621fc53c9de46f945d45c9d/2024_tesla_model-3-highland_front.jpg" },
    { id: 4, name: "Ford Mustang", price: 55000, fuel: "Petrol", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqAG3slmwmyeX6epAPsWVs39vxvKNXWKcZtw&s" },
    { id: 5, name: "Chevrolet Malibu", price: 24000, fuel: "Petrol", image: "https://vehicle-images.dealerinspire.com/e129-110010491/thumbnails/large/1G1ZG5ST5SF131425/ea3deff4230f995a5dec0f85a6e0b55c.jpg" },
    { id: 6, name: "Nissan Altima", price: 26000, fuel: "Petrol", image: "https://di-uploads-pod35.dealerinspire.com/newtonnissanofgallatin/uploads/2020/11/2021-Nissan-Altima-Model-Left-728x400.jpg" },
    { id: 7, name: "BMW 3 Series", price: 42000, fuel: "Diesel", image: "https://imgd.aeplcdn.com/1920x1080/cw/ec/37067/BMW-3-Series-Exterior-167583.jpg?wm=0&q=80&q=80" },
    { id: 8, name: "Audi A4", price: 41000, fuel: "Diesel", image: "https://img.autocarpro.in/autocarpro/IMG/905/51905/the-all-new-audi-a4-35-tdi.jpg" },
    { id: 9, name: "Mercedes C-Class", price: 47000, fuel: "Diesel", image: "https://media.assettype.com/evoindia/2022-05/9678ff3f-1254-4904-ba02-83eae3790065/hero.jpg" },
    { id: 10, name: "Hyundai Elantra", price: 22000, fuel: "Petrol", image: "https://www.netcarshow.com/Hyundai-Elantra-2024-Front_Three-Quarter.d6dbe809.jpg" },
    { id: 11, name: "Kia Optima", price: 24000, fuel: "Petrol", image: "https://i2.wp.com/www.car-revs-daily.com/wp-content/uploads/2018/09/2019-Kia-Optima-SX-Turbo-2.jpg?fit=2048%2C1229&ssl=1" },
    { id: 12, name: "Volkswagen Jetta", price: 23000, fuel: "Petrol", image: "https://www.volkswagengreenbay.com/blogs/5561/wp-content/uploads/2024/08/2024-VW-Jetta.jpg" },
    { id: 13, name: "Subaru Legacy", price: 27000, fuel: "Petrol", image: "https://media.ed.edmunds-media.com/subaru/legacy/2025/oem/2025_subaru_legacy_sedan_sport_fq_oem_1_1600.jpg" },
    { id: 14, name: "Mazda 6", price: 25000, fuel: "Petrol", image: "https://external-preview.redd.it/2024-will-be-the-last-year-the-mazda-6-will-be-available-in-v0-4vbBCcKMOfWVSglhtmW_j5s6hW-JSIoiDHiNofCXeuE.jpg?width=1080&crop=smart&auto=webp&s=f34db9088e63d5f9e80b39c2dab05ea00d9406dd" },
    { id: 15, name: "Lexus ES", price: 39000, fuel: "Hybrid", image: "https://cdn.motor1.com/images/mgl/6ZorgE/s1/lexus-es-facelift-china.jpg" },
    { id: 16, name: "Infiniti Q50", price: 38000, fuel: "Petrol", image: "https://vehicle-images.dealerinspire.com/867d-18003213/JN1EV7CR9RM631882/419a94d0bdd29b4fe907b5106400b736.jpg" },
    { id: 17, name: "Jaguar XE", price: 45000, fuel: "Diesel", image: "https://imgcdn.oto.com/large/gallery/color/18/115/jaguar-xe-color-392679.jpg" },
    { id: 18, name: "Volvo S60", price: 41000, fuel: "Hybrid", image: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fvolvo%2Fs60-cross-country%2Fvolvo-s60-cross-country.jpg%3Fv%3D6&w=3840&q=75" },
    { id: 19, name: "Genesis G70", price: 40000, fuel: "Petrol", image: "https://di-uploads-pod2.dealerinspire.com/genesisoflittleton/uploads/2020/08/2020-Genesis-G70.png" },
    { id: 20, name: "Porsche Panamera", price: 87000, fuel: "Hybrid", image: "https://imgd.aeplcdn.com/1920x1080/n/cw/ec/165641/panamera-exterior-right-front-three-quarter.jpeg?isig=0&q=80&q=80" },
    { id: 21, name: "Toyota Corolla", price: 20000, fuel: "Petrol", image: "https://www.toyotabycfao.ng/media/gamme/modeles/images/efdb414861674e3521fea1159ded7ea6.jpeg" },
    { id: 22, name: "Honda Accord", price: 28000, fuel: "Petrol", image: "https://images.dealer.com/ddc/vehicles/2025/Honda/Accord%20Hybrid/Sedan/color/Canyon%20River%20Blue%20Metallic-BU-37,45,60-640-en_US.jpg" },
    { id: 23, name: "Chevrolet Impala", price: 31000, fuel: "Petrol", image: "https://heartbids-resized.s3.eu-central-1.amazonaws.com/2024/06/HeartBids-Chevrolet-Impala-1967-Exterieur-1-Version3-624x454.jpg" },
    { id: 24, name: "Tesla Model S", price: 90000, fuel: "Electric", image: "https://motoroctane.com/wp-content/uploads/2021/01/1-3.jpg" },
    { id: 25, name: "Ford Fusion", price: 26000, fuel: "Hybrid", image: "https://www.vdm.ford.com/content/dam/brand_ford/en_us/brand/cars/fusion/sunset/FL10383620_FUSI_Hyb_SE_34FrntPassStcVlctyBlueNight_mj_16x9.jpg/jcr:content/renditions/cq5dam.web.768.768.jpeg" },
    { id: 26, name: "Nissan Maxima", price: 34000, fuel: "Petrol", image: "https://di-uploads-pod35.dealerinspire.com/newtonnissanofgallatin/uploads/2021/01/2021-Nissan-Maxima-Model-Left-728x400.jpg" },
    { id: 27, name: "Hyundai Sonata", price: 27000, fuel: "Hybrid", image: "https://cdn.jdpower.com/JDPA_2021%20Hyundai%20Sonata%20N%20Line%20Yellow%20Front%20Quarter%20View.jpg" },
    { id: 28, name: "Kia Stinger", price: 36000, fuel: "Petrol", image: "https://ik.imagekit.io/girnar/sayaratbay/large/gallery/color/19/1035/kia-stinger-color-833707.jpg" },
    { id: 29, name: "Audi A6", price: 57000, fuel: "Diesel", image: "https://uploads.audi-mediacenter.com/system/production/media/58231/images/c64a1478912a6f356bbffd71ab3c62aee760b910/A181743_web_2880.jpg?1698302446" },
    { id: 30, name: "Mercedes E-Class", price: 62000, fuel: "Diesel", image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/Mercedes-Benz-E-Class-2015-2017/1293/1562734844928/front-left-side-47.jpg" }
  
  ];
  const Booking = () => {
    const { carId } = useParams(); // Get car ID from URL
    const navigate = useNavigate();
  
    const selectedCar = carData.find((car) => car.id === Number(carId));
  
    if (!selectedCar) {
      return <h2>Car not found!</h2>;
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
  
      const bookingDetails = {
        carName: selectedCar.name,
        price: selectedCar.price,
        fuelType: selectedCar.fuel,
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        address: formData.get("address"),
        occupation: formData.get("occupation"),
        contactMethod: formData.get("contactMethod"),
        bookingDate: formData.get("date"),
        timestamp: new Date(),
      };
  
      try {
        const docRef = await addDoc(collection(db, "bookings"), bookingDetails);
        console.log("✅ Booking saved with ID:", docRef.id);
        alert(`Booking confirmed for ${selectedCar.name} Thank You!`);
        navigate("/"); // Redirect to home page
      } catch (error) {
        console.error("❌ Error adding document:", error);
        alert("Failed to book the car. Please try again.");
      }
    };
  
    return (
      <div className="booking-container">
        <h2>Booking for {selectedCar.name}</h2>
        <img src={selectedCar.image} alt={selectedCar.name} className="car-image" />
        <p>Price: ${selectedCar.price}</p>
        <p>Fuel Type: {selectedCar.fuel}</p>
  
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="name" required />
          </div>
  
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
  
          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" name="phone" required />
          </div>
  
          <div className="form-group">
            <label>Address:</label>
            <input type="text" name="address" placeholder="Street, City, State, Zip" required />
          </div>
  
          <div className="form-group">
            <label>Occupation:</label>
            <input type="text" name="occupation" placeholder="Your profession" required />
          </div>
  
          <div className="form-group">
            <label>Preferred Contact Method:</label>
            <select name="contactMethod" required>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>
  
          <div className="form-group">
            <label>Booking Date:</label>
            <input type="date" name="date" required />
          </div>
  
          <button type="submit" className="confirm-button">Confirm Booking</button>
        </form>
      </div>
    );
  };
  
  export default Booking;