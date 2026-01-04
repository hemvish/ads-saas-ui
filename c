<script>
async function analyzeSite() {
    const url = document.getElementById("url").value;
    const output = document.getElementById("output");

    output.innerHTML = "Analyzing...<br><br>";

    const formData = new FormData();
    formData.append("url", url);

    const response = await fetch("/ai-insights-stream", {
        method: "POST",
        body: formData
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        output.innerHTML += decoder.decode(value);
    }
}
</script>

