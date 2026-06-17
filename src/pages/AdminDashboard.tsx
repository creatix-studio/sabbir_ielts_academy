import React, { useState, useEffect } from "react";
import { Lock, Download, Trash2, Search, User, Filter, AlertCircle } from "lucide-react";

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [admissions, setAdmissions] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  useEffect(() => {
    // Check session style login flag in localStorage
    if (localStorage.getItem("adminAuth") === "true") {
      setIsAuthenticated(true);
      loadAdmissions();
    }
  }, []);

  const loadAdmissions = () => {
    const data = localStorage.getItem("admissionsData");
    if (data) {
      setAdmissions(JSON.parse(data));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "sabbirhossain.sh1225@gmail.com" && password === "sabbir3052") {
      setIsAuthenticated(true);
      setError("");
      localStorage.setItem("adminAuth", "true");
      loadAdmissions();
    } else {
      setError("Invalid email or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("adminAuth");
  };

  const handleDelete = (id: string) => {
    const confirm = window.confirm("Are you sure you want to delete this admission record?");
    if (confirm) {
      setIsDeleting(id);
      setTimeout(() => {
        const newData = admissions.filter(a => a.id !== id);
        setAdmissions(newData);
        localStorage.setItem("admissionsData", JSON.stringify(newData));
        setIsDeleting(null);
      }, 500);
    }
  };

  const downloadCSV = () => {
    if (admissions.length === 0) return;
    
    // Convert to CSV
    const headers = ["ID", "Date", "Full Name", "Phone", "Email", "Course", "Target Score", "Proficiency", "Class Mode", "Time", "Mock Test requested"];
    const csvRows = [headers.join(",")];
    
    for (const row of admissions) {
      const values = [
        row.id,
        new Date(row.date).toLocaleDateString(),
        `"${row.fullName || ""}"`,
        row.phone || "",
        row.email || "",
        `"${row.course || ""}"`,
        row.targetScore || "",
        row.proficiency || "",
        row.classMode || "",
        row.preferredTime || "",
        row.mockTest ? "Yes" : "No"
      ];
      csvRows.push(values.join(","));
    }
    
    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `admissions_data_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredAdmissions = admissions.filter(a => 
    (a.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) || false) || 
    (a.phone?.includes(searchTerm) || false) ||
    (a.course?.toLowerCase().includes(searchTerm.toLowerCase()) || false) ||
    (a.id?.toLowerCase().includes(searchTerm.toLowerCase()) || false)
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#f8fbfa] pt-32 pb-20 flex flex-col justify-center items-center px-4">
        <div className="bg-white p-8 md:p-10 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-full max-w-md border border-neutral-200">
          <div className="w-14 h-14 bg-red-50 text-[#d02830] rounded-2xl flex items-center justify-center mb-6 mx-auto">
            <Lock size={28} strokeWidth={2.5} />
          </div>
          <h1 className="text-2xl font-serif font-bold text-center text-[#00174e] mb-2">Admin Security Panel</h1>
          <p className="text-gray-500 font-sans text-sm text-center mb-8">Sign in strictly authorized personnel</p>

          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl flex items-center gap-2 mb-6 font-sans text-sm font-semibold">
              <AlertCircle size={16} />
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Admin Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-[#d02830] focus:ring-1 focus:ring-[#d02830] transition-colors"
                placeholder="sabbirhossain.sh1225@gmail.com"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Protected Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:bg-white focus:border-[#d02830] focus:ring-1 focus:ring-[#d02830] transition-colors"
                placeholder="Enter admin password"
                required
              />
            </div>
            <button 
              type="submit"
              className="mt-4 bg-[#00174e] hover:bg-[#011038] text-white font-bold py-3.5 rounded-xl transition-all font-sans cursor-pointer flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Sign In to Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fbfa] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white p-6 rounded-[24px] shadow-sm border border-neutral-100">
          <div>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#00174e]">Admissions Data Center</h1>
            <p className="text-gray-500 text-sm mt-1">Manage and export all student registrations directly.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={downloadCSV}
              disabled={admissions.length === 0}
              className="bg-[#d02830] hover:bg-[#a01a20] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-xl font-sans text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors shadow-md"
            >
              <Download size={16} /> 
              Export Data CSV
            </button>
            <button 
              onClick={handleLogout}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2.5 rounded-xl font-sans text-sm font-bold flex items-center gap-2 cursor-pointer transition-colors border border-gray-200"
            >
              <Lock size={16} /> 
              Secure Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-[24px] shadow-sm border border-neutral-100 overflow-hidden flex flex-col">
          {/* Controls Bar */}
          <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-gray-50/50">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search name, phone, course, ID..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-[#00174e] focus:ring-1 focus:ring-[#00174e] text-sm"
              />
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium whitespace-nowrap bg-white px-4 py-2.5 rounded-xl border border-gray-200">
              <User size={16} className="text-[#00174e]" />
              Total Registrations: <span className="font-bold text-[#00174e]">{admissions.length}</span>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left font-sans whitespace-nowrap">
              <thead className="bg-gray-50 text-gray-500 text-[11px] uppercase tracking-wider font-extrabold border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4">Student Info</th>
                  <th className="px-6 py-4">Date & ID</th>
                  <th className="px-6 py-4">Selected Course</th>
                  <th className="px-6 py-4">Preferences</th>
                  <th className="px-6 py-4">Contact Detail</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100/80">
                {filteredAdmissions.length > 0 ? (
                  filteredAdmissions.map((item) => (
                    <tr key={item.id} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-serif font-bold text-[#00174e] text-sm">{item.fullName}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{item.proficiency || "Unknown"} Level</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-bold text-gray-800 text-xs">{new Date(item.date).toLocaleDateString()}</div>
                        <div className="text-xs text-blue-600 font-mono mt-0.5">{item.id}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className="bg-[#eef5fc] text-[#00174e] px-2.5 py-1 rounded-md text-xs font-bold font-serif whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">
                            {item.course}
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 mt-1 font-bold">Target: {item.targetScore}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs font-bold text-gray-700">{item.classMode}</div>
                        <div className="text-[11px] text-gray-500 mt-0.5 max-w-[120px] truncate">{item.preferredTime}</div>
                        {item.mockTest && <span className="inline-block mt-1 text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">Mock Test: Yes</span>}
                      </td>
                      <td className="px-6 py-4">
                        <div className="font-mono text-xs font-semibold text-gray-800">{item.phone}</div>
                        <div className="text-xs text-gray-500 mt-0.5 max-w-[150px] truncate">{item.email || "-"}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button 
                          onClick={() => handleDelete(item.id)}
                          disabled={isDeleting === item.id}
                          className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors cursor-pointer disabled:opacity-50 inline-flex"
                          title="Delete Record"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      <div className="flex flex-col items-center justify-center gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                          <Filter size={20} />
                        </div>
                        <p className="font-sans font-medium">No admission records found.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
