const carName = "opel";
const carNumber = 125;
const isCar = true;
const cars = ['opel', 'BMW', 12, 'Volvo', false]

const myFv = () => {
  return "hello"
}

const carList = [
  {carName: 'opel', doorNumber: 4},
  {carName: 'skoda', doorNumber: 4},
  {carName: 'mercedes', doorNumber: 4},
  {carName: 'BMW', doorNumber: 5},
  {carName: "Trabant", doorNumber: 2}
]

const newArray = carList.map((c) => 
  (
    <div key={c.carName} className="carBrand">
      <p>Marka:</p>
      <p><em>{c.carName}</em></p>
      <p>Ajtók száma: {c.doorNumber}</p>
    </div>
  )
)
console.log(newArray);


const App= () => {
  return (
    <div>
      <h1>Hello world</h1>
      <p class="par">Ez egy <br /> szöveg</p>
      <div id="egyedi">Ez egy autó név {carName} {carNumber} {isCar}</div>
      <p>{cars}</p>
      <input type="password" placeholder="minta.jozsi@gmail.com" />

      <div className="carBrand">
        <p>Marka:</p>
        <p><em>Opel</em></p>
        <p>Ajtók száma: 4</p>
      </div>
      <div className="carBrand">
        <p>Marka:</p>
        <p><em>skoda</em></p>
        <p>Ajtók száma: 4</p>
      </div>
      <div className="carBrand">
        <p>Marka:</p>
        <p><em>mercedes</em></p>
        <p>Ajtók száma: 4</p>
      </div>
      <div className="carBrand">
        <p>Marka:</p>
        <p><em>BMW</em></p>
        <p>Ajtók száma: 5</p>
      </div>
      <div className="carBrand">
        <p>Marka:</p>
        <p><em>trabant</em></p>
        <p>Ajtók száma: 2</p>
      </div>



    </div>
  );
}

export default App;
