import { useState, useEffect } from "react";
import axios from "axios";

export default function Family() {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFamilyMembers = async () => {
      try {
        const response = await axios.get('https://asokfoundationbd.com/api/families');
        setFamilyMembers(response.data.data);
      } catch (error) {
        console.error('Error fetching family members:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFamilyMembers();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto px-16 lg:px-24 py-10">
        <div className="text-center">Loading...</div>
      </section>
    );
  }

  return (
    <section className="mx-auto px-16 lg:px-24 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">পরিবার</h2>
      
      {/* Members Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {familyMembers.map((member) => (
          <div
            key={member._id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden text-center"
          >
            <img
              src={`https://asokfoundationbd.com/${member.image}`}
              alt={member.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {member.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {familyMembers.length === 0 && (
        <p className="text-center text-gray-500 mt-10">
          কোনো পরিবারের সদস্য পাওয়া যায়নি।
        </p>
      )}
    </section>
  );
}
