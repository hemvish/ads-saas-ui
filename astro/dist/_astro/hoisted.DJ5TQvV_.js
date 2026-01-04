import"https://cdn.tailwindcss.com";const o=document.getElementById("dashboardContent"),e=localStorage.getItem("token");e||(window.location.href="/login");async function a(){if(o)try{const t=await fetch("http://127.0.0.1:8000/api/dashboard/stats",{headers:{Authorization:"Bearer "+e}});if(!t.ok)throw new Error("Unauthorized");const r=await t.json();o.innerHTML=`
          <div class="bg-[#020617] border border-gray-700 p-6 rounded-xl">
            <h2 class="text-xl font-bold text-green-400 mb-2">
              Dashboard Stats
            </h2>
            <pre class="text-sm text-gray-300">
${JSON.stringify(r,null,2)}
            </pre>
          </div>
        `}catch{localStorage.removeItem("token"),window.location.href="/login"}}a();
