import axios from 'axios';

export default async function handler(req, res) {
    console.log("successfully called");
    if (req.method === 'POST') {
        const { resumeText, jobDescriptionText, userInput,draftInput } = req.body;

        // console.log(process.env.OPENAI_API_KEY);
        const apiKey = process.env.OPENAI_API_KEY; // 使用环境变量来存储 API 密钥
        const userContent = `Resume Content: ${resumeText}. Job Description Content: ${jobDescriptionText}. CoverLetter draft : ${draftInput}. Additional specific points or experiences wants to emphasize or include to make the coverletter better: ${userInput}`;

        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', {
                model: "gpt-3.5-turbo-1106",
                messages: [
                    {
                        role: "system",
                        content: "Your role is to act as a cover letter generator, specifically tailored for each individual." +
                        "You'll create a coverletter based on a company's job description, the user's personal resume, CoverLetter draft and any additional personalized content they wish to include." +
                        "Your goal is to write a crafting compelling, unique cover letters that effectively highlight their skills and experiences in relation to the job they are applying for." +
                        "Please focus on reasonable line breaks and pay attention to the standard coverletter format."+
                        "Additionally, if the user provides a draft of their cover letter, you are tasked with optimizing and improving it for the specific company they are applying to, using the template and structure of the draft provided."+
                        "Be mindful not to share personal information and always maintain a professional tone.<br /><br />"
                        },
                    {
                        role: "user",
                        content: userContent // 使用用户输入
                    }
                ]
            }, {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json'
                }
            });

            res.status(200).json({ coverLetter: response.data.choices[0].message.content });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'An error occurred while generating the cover letter.' });
        }
    } else {
        // 处理非 POST 请求
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
