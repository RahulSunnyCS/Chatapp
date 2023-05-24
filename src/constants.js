export const initialPrompt = [
    {
        key: "skills",
        prompt: "What are your skills? What are you naturally good at?",
    },
    {
        key: "strengths",
        prompt: "What are your strengths?",
    },
    {
        key: "education",
        prompt: "What is your highest level of education? Please provide the degree or qualification obtained, the field of study, and the name of the institution?",
    },
    {
        key: "values",
        prompt: "What are your values? What is important to you in a career, such as work-life balance, helping others, creativity, or financial stability?",
    },
    {
        key: "aspirations",
        prompt: "What are your long-term goals and aspirations? Where do I see myself in the future?",
    },
    {
        key: "experience",
        prompt: "Could you tell us about your experience and what you enjoy most about it?",
    },
    {
        key: "family background",
        prompt: "Has your family background influenced your career or personal interests in any way? If so, feel free to share how your family's experiences have shaped your own path.",
    },
    {
        key: "current location",
        prompt: "In which city or region are you currently based? ",
    },
    {
        key: "planning to relocate to",
        prompt: "Are you open to relocation for the right opportunity? If so, please let us know the locations or regions where you would be willing to relocate",
    },
    {
        key: "interests",
        prompt: "What are your main areas of interest? This can include hobbies, activities, or subjects that you find particularly engaging or enjoyable.",
    },
    {
        key: "suggestion prompt",
        prompt: `Please select the options that resonate with you the most from the above list. You can choose one or multiple options that align with your personal beliefs and priorities.
                Sample Answer : 1, 2, and 4`
    }
]


export const suggestionPrompt1 = ` User likes to go with ${`userInput`}
Compare the above results on basis of following factors, assign weightage to factors in the mentioned order, top being the highest:
1.Market Size
2.Job market and opportunities
3.Income potential
4.Risk tolerance
5.Health Risks
6.Work Environment
7.Geographical Factors

Give us the results in json format with following fields:
1.Course name
2.Description based on the factors listed above
3.On a scale of 10, how high will you rate this industry for user to build their career in

Give the industry you recommend the most among the above factor based comparison with reason in the same json format as above.
`