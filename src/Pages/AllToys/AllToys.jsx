import React from "react";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const url = `http://localhost:5000/newToySuperHero?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }),
    [url];
  return (
    <div>
      <h1 className="text-center font-bold text-3xl">All Toys</h1>
      <input
        className="bg-gray-500 rounded-sm ml-48 h-10 pl-3"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by toy name"
      />

      <div className="w-[1600px] mx-auto rounded-lg bg-gray-600 h-14 mt-5 text-yellow-50 mb-6">
        <thead>
          <tr>
            <th>Toy Image</th>
            <th>Seller Name</th>
            <th>Seller Email</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Ratings</th>
            <th>Details</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
      </div>
      <div className="mt-6">
        {myToys
          .filter((toy) =>
            toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .slice(0, 20)
          .map((toys) => (
            <Toys key={toys._id} toys={toys}></Toys>
          ))}
      </div>
    </div>
  );
};

export default AllToys;
{
  /* <div className="flex justify-center -ml-56 gap-36  mx-auto leading-loose mb-8 text-gray-600 font-bold">
<img className="h-20 w-20" src={imageURL} alt="" />
<h5 className="text-center">{sellerName}</h5>
<h5 className="text-center -ml-10">{toyName}</h5>
<h5 className="text-center">{subCategory}</h5>
<h5 className="text-center">{price}</h5>
<h5 className="text-center">{quantity}</h5>
<Link to={`/toyDetails/${_id}`}><button className="btn btn-outline">View Details</button></Link> */
}
