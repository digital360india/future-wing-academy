export default function CognitiveTest() {
  return (
    <div className=" py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-gray-800">
        
        <h2 className="text-xl md:text-2xl font-bold mb-4">
          1. Cognitive Ability Test in CPSS
        </h2>

        <ul className="list-disc pl-6 text-sm mb-6 space-y-1">
          <li>6 Test are there.</li>
          <li>Total Question: 212 (MCQ Based)</li>
          <li>Total Time: 2 hours 30 minutes</li>
        </ul>

        {/* Table */}
        <div className="overflow-x-auto border border-gray-400">
          <table className="w-full text-sm border-collapse">
            
            {/* Table Head */}
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-400 px-3 py-2 text-left">S.No</th>
                <th className="border border-gray-400 px-3 py-2 text-left">Test Name</th>
                <th className="border border-gray-400 px-3 py-2 text-left">Questions</th>
                <th className="border border-gray-400 px-3 py-2 text-left">About</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              
              {/* Row 1 */}
              <tr>
                <td className="border border-gray-300 px-3 py-6 align-top">1</td>
                <td className="border border-gray-300 px-3 py-6 align-top">INSB 1</td>
                <td className="border border-gray-300 px-3 py-6 align-top">15</td>
                <td className="border border-gray-300 px-3 py-4 space-y-1">
                  <p>Recognizing Scales and meters</p>
                  <p>• Magnetic Compass</p>
                  <p>Airspeed Indicator</p>
                  <p>Altimeter</p>
                  <p>Altitude Indicator</p>
                  <p>• Vertical Speed Indicator</p>
                  <p>• Turn Coordinator</p>
                </td>
              </tr>

              {/* Row 2 */}
              <tr>
                <td className="border border-gray-300 px-3 py-4">2</td>
                <td className="border border-gray-300 px-3 py-4">INSB 2</td>
                <td className="border border-gray-300 px-3 py-4">60</td>
                <td className="border border-gray-300 px-3 py-4">
                  Determine position of airplane from instruments
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td className="border border-gray-300 px-3 py-4">3</td>
                <td className="border border-gray-300 px-3 py-4">Spatial Ability Test</td>
                <td className="border border-gray-300 px-3 py-4">30</td>
                <td className="border border-gray-300 px-3 py-4">
                  Perceiving 2D, 3F Figures in space
                </td>
              </tr>

              {/* Row 4 */}
              <tr>
                <td className="border border-gray-300 px-3 py-4">4</td>
                <td className="border border-gray-300 px-3 py-4">Spatial Visualization Test</td>
                <td className="border border-gray-300 px-3 py-4">30</td>
                <td className="border border-gray-300 px-3 py-4">
                  Perceiving position of objects in space
                </td>
              </tr>

              {/* Row 5 */}
              <tr>
                <td className="border border-gray-300 px-3 py-4">5</td>
                <td className="border border-gray-300 px-3 py-4">Numerical Reasoning Test</td>
                <td className="border border-gray-300 px-3 py-4">30</td>
                <td className="border border-gray-300 px-3 py-4">
                  Perceiving position of objects in space
                </td>
              </tr>

              {/* Row 6 */}
              <tr>
                <td className="border border-gray-300 px-3 py-4">6</td>
                <td className="border border-gray-300 px-3 py-4">Reasoning Test</td>
                <td className="border border-gray-300 px-3 py-4">30</td>
                <td className="border border-gray-300 px-3 py-4">
                  Verbal and Non Verbal reasoning
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}