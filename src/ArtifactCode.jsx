<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yandex图片搜索</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"></script>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .container {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            margin: 2rem;
            max-width: 800px;
            width: 100%;
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 1.5rem;
        }
        #uploadForm {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        #imageInput {
            display: none;
        }
        .custom-file-upload {
            border: 1px solid #ccc;
            display: inline-block;
            padding: 6px 12px;
            cursor: pointer;
            background-color: #f8f9fa;
            color: #495057;
            border-radius: 4px;
            transition: all 0.3s;
        }
        .custom-file-upload:hover {
            background-color: #e9ecef;
        }
        #searchButton {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        #searchButton:hover {
            background-color: #0056b3;
        }
        #searchButton:disabled {
            background-color: #6c757d;
            cursor: not-allowed;
        }
        #previewContainer {
            margin-top: 1rem;
            text-align: center;
        }
        #imagePreview {
            max-width: 100%;
            max-height: 300px;
            border-radius: 4px;
            display: none;
        }
        #results {
            margin-top: 2rem;
        }
        #results ul {
            list-style-type: none;
            padding: 0;
        }
        #results li {
            margin-bottom: 0.5rem;
        }
        #results a {
            color: #007bff;
            text-decoration: none;
        }
        #results a:hover {
            text-decoration: underline;
        }
        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3498db;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            animation: spin 1s linear infinite;
            margin: 20px auto;
            display: none;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Yandex图片搜索</h1>
        <form id="uploadForm">
            <label for="imageInput" class="custom-file-upload">
                选择图片
            </label>
            <input type="file" id="imageInput" accept="image/*">
            <div id="previewContainer">
                <img id="imagePreview" alt="图片预览">
            </div>
            <button type="submit" id="searchButton" disabled>搜索图片</button>
        </form>
        <div class="loader" id="loader"></div>
        <div id="results"></div>
    </div>

    <script>
        const imageInput = document.getElementById('imageInput');
        const imagePreview = document.getElementById('imagePreview');
        const searchButton = document.getElementById('searchButton');
        const uploadForm = document.getElementById('uploadForm');
        const loader = document.getElementById('loader');
        const resultsDiv = document.getElementById('results');

        imageInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    imagePreview.src = e.target.result;
                    imagePreview.style.display = 'inline-block';
                    searchButton.disabled = false;
                }
                reader.readAsDataURL(file);
            } else {
                imagePreview.style.display = 'none';
                searchButton.disabled = true;
            }
        });

        uploadForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const imageFile = imageInput.files[0];
            if (!imageFile) {
                alert('请选择一个图片文件');
                return;
            }

            const formData = new FormData();
            formData.append('image', imageFile);

            searchButton.disabled = true;
            loader.style.display = 'block';
            resultsDiv.innerHTML = '';

            try {
                // 注意：这里需要替换为实际的API端点
                const response = await axios.post('https://your-backend-api.com/search', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                const results = response.data;
                displayResults(results);
            } catch (error) {
                console.error('Error:', error);
                alert('搜索过程中发生错误，请稍后再试。');
            } finally {
                searchButton.disabled = false;
                loader.style.display = 'none';
            }
        });

        function displayResults(results) {
            resultsDiv.innerHTML = '';

            if (results.length === 0) {
                resultsDiv.innerHTML = '<p>没有找到匹配的图片。</p>';
                return;
            }

            const ul = document.createElement('ul');
            results.forEach(result => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = result.sourceUrl;
                a.textContent = result.sourceUrl;
                a.target = '_blank';
                li.appendChild(a);
                ul.appendChild(li);
            });

            resultsDiv.appendChild(ul);
        }
    </script>
</body>
</html>
