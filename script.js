// ==============================
// StudyLens AI Dashboard
// ==============================

document.addEventListener("DOMContentLoaded", function () {

    // Menu Sidebar Aktif
    const menuItems = document.querySelectorAll(".sidebar li");

    menuItems.forEach(item => {
        item.addEventListener("click", function () {

            menuItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");

        });
    });

    // Tombol Upload
    const uploadBtn = document.querySelector(".upload-box .btn");

    if(uploadBtn){

        uploadBtn.addEventListener("click", function(){

            alert("✅ Materi berhasil diupload!");

        });

    }

    // Tombol AI Summary
    const summaryBtn = document.querySelector(".feature-card:nth-child(1) button");

    if(summaryBtn){

        summaryBtn.onclick = function(){

            alert("🧠 Membuka AI Summary...");

        }

    }

    // Tombol AI Quiz
    const quizBtn = document.querySelector(".feature-card:nth-child(2) button");

    if(quizBtn){

        quizBtn.onclick = function(){

            alert("❓ Membuka AI Quiz...");

        }

    }

    // Tombol AI Assistant
    const aiBtn = document.querySelector(".feature-card:nth-child(3) button");

    if(aiBtn){

        aiBtn.onclick = function(){

            alert("💬 Membuka AI Assistant...");

        }

    }

    // Tombol Progress
    const progressBtn = document.querySelector(".feature-card:nth-child(4) button");

    if(progressBtn){

        progressBtn.onclick = function(){

            alert("📈 Menampilkan Progress Belajar");

        }

    }

});