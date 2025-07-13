## Trust Builder AKA War Games
#### Justin McOmie

This is a draft business outline, the intent of which is to establish a problem space framing, surface existing thinking on the subject, and to explore business opportunities that can serve the rapidly evolving AI market constructively.

### <ins>Definitions</ins>

**Model Context Protocol (MCP clients):** Tool calling.  An agentic world.<br>
**Red Teaming:** See [3]<br>
**MCP Clients:**<br>

### <ins>Our Foundational Question and the WeFunder Hackathon</ins>

We built an orchestrator platform for MCP servers, generators for parametized false information and news, and several MCP servers for providing such information and for red teaming (limit testing) LLMs. A catalyst for this effort was provocative questions such as: "What does it take for an LLM to call an MCP tool to do something malicious, such as launching a bomb, even if the user did not request the action or expressed opposition to the LLM about such an action?"

### <ins>Product Overview</ins>

Broadly, we're crowdsourcing the red teaming of LLMs by providing a platform with state of the art tools and by hosting competitions to jailbreak or get the LLM to perform mocked malicious actions.  Specifically our platform provides a slate of MCP servers, MCP clients, and LLM for finding issues, with an emphasis on complex agentic workflows, tracking state on our servers, and evaluating on both established taxonomies [6] and using novel severity grading of exploits.

### <ins>Go to Market Plan: War Games and a Freemium Model</ins>

**War Games**

Our initial focus is to attract users to break LLMs in a War Games like competition in which the goal is to get an open source LLM, such as Llama, to make calls to tools to perform malevlone actions, the MCP tools themselves will be mocked and be engineered within well-defined ethical frameworks [see: Ethical Considerations].

**Fremium Model**

The platform will operate under a freemium model wherein the base platform, including novel agentic ontology development (MCP agent handoff, etc) and War Game / Red Team competitions are free to participate in, but the use of more advanced platform componenents (e.g. real time forking and editing of Open Source tools) are done either on a pay-per-use, for otherwise metered resources like compute, or a subscription model with sensible usage caps in the vein of the OpenAI Pro and Claude models.  User success in competitions may be used to award credits on the platform that would otherwise be gated by the pay-per-use model.

### <ins>Why This, Why Now, and the Importance of Intuition</ins>

We believe that bridging the grassroots approach to LLM red teaming [6] with state of the art technology and a structured ethical framework can surface vulnerabilities most effectively as well as provide a strong business value to customers. As noted in [6], human intuition is a critical factor in understanding the limitations of LLMs.

[Quote on Intuition]

The current market of security tools use an outdated model of security research and underemphasize the utility of human intuition and information sharing at scale.  Given the rate of adoption of AI tools this represents a critical business value for companies.

A human can slowly guide the LLM. Red Teaming are often emphasize breadth of functionality. We want to channel people into our platform who might otherwise be doing this kind of red teaming on their own. The pace at which jobs are being replaced by AI is all the more reason to want issues to be disclosed sooner. If issues are not fixed or models regress, knowing the full risk scope of an issue is a critical factor.

### <ins>Ethical Considerations</ins>

Because Trust Builder explores the sensitive domain of malicious LLM outputs and tool calls, ethical considerations are a top priority, if not *the* top priority, in the development and orientation of the platform.

**User Ethics**

The ethics of the users of the platform.


**Company Ethics**

The selection of promoted competitions are pursuant to a concrete ethical framework.  For instance, we would draw a moral distinction on political and social lines between hosting a competition to produce hate speech, and hosting a competition to have a tool launch a simulated military attack.  


**Disclosure Ethics**


There are existing recommendations regarding zero days.

Given that the ability to exploit an LLM sits in the space of human intuition whereas a bug sits in the space of, and with the pressure with which, that the ethical disclosure standard of 90 days for so called zero day bugs in software should be at least halved for vulnerabilities in LLMs.  We believe that the fundamentally accessible nature of LLM prompt exploits, especially in that they are oriented in human intuition with minimal knowledge of LLM internals, makes the disclosure of issues of this kind more important, not less.


We believe that a company like this that is successful in finding novel LLM zero days and ethically publicizing them, could be an acquistion target for a large AI company.  However, due to objectivity concerns we resolve to not sell to any company that makes money from LLMs in a way that could be compromised by vulnerability discoveries.  This would include any LLM maker as well as any company that is allowing users to input data of any kind directly to an LLM as a function of their product or support offerings.

Ultimately the success of this project over a long timeframe is rooted in the integrity of claims, and a demonstrable openness to update evaluations and asssessments.

Most zero days bugs in software are esoteric and statistically unlikely to be reproduced quickly.  Consider the Heartbleed bug.  These are esoteric bugs that require high ability and high motivation. By contrast, discovering an LLM "zero day" prompt-interfacing exploitation does not require a similar level of technical ability.

There are arguments to make for lengthening and shortening the window. We believe that companies that are implementing workforce replacement picture will have a more accurate cost understanding if the LLM they choose to fit their price parameters is fundamentally vulnerable to different.


Consider Claude's system prompt:
https://pub.towardsai.net/tokens-wasted-on-empty-words-claudes-leaked-24k-system-prompt-is-shockingly-inefficient-5e188a2792a8


### <ins>Long Term Vision - Product and Community</ins>

To build a business and organize a community of developers with the aim of smart and “stochastically aware” development of MCP servers and clients. Out platform has (will have) plug-and-play support for various MCP clients, built-in discovery of popular MCP servers, the ability to mock data and tool outputs, and the ability for users to experiment with different server parameters in real time.  We'll host “break-a-thons” — competitions to see who can get the LLM to do the most undesirable activity for a user input.  Our goal is to better undersatnd and promote the visibility of the highs and lows of modern agentic development.

Launching a bomb.
Giving unsound therapeutic advice.
Submitting malicious code.

Our platform can serve as a go to place for developers to crowdsource structural weaknesses in their models, by allowing users to submit their own agentic patterns using skeleton code and offering their own bounties for issues.

Users can simply leverage existing patterns and breaks and test them against models with known issues and to develop thier own intuitions for attacking new models.

### <ins>Tech Stack Outline</ins> 

Parameterized:

LLMs<br>
MCP Servers<br>
MCP Clients<br>
Red Teaming Tools and Standards


Novel agent creation.  The use of existing agents via docker.


### <ins>Existing Tools, Frameworks and Comeptitors</ins>

Existing red team tools can be leveraged to do a first pass evaluation of a prompt.

Mindset shift - we feel that disclosure should be considered differently. Existing red teaming solutions are intended to safeguard against first-order, shallow attacks.  They don't take into account longer context windows. **Note: See [6] for contrasting perspectives on red teaming approaches.**

Further many existing approaches do not leverage MCP to its full extent today.

These companies provide interesting solutions but do not make human intuition front and center.
https://www.grayswan.ai
https://www.trydeepteam.com



### References:

[1] O'Connor, A. (2023, October 23). *I convinced ChatGPT that God exists* [Video]. YouTube. https://www.youtube.com/watch?v=wS7IPxLZrR4

[2] OpenAI. (2025, April 29). *Sycophancy in GPT-4o: What happened and what we're doing about it*. https://openai.com/index/sycophancy-in-gpt-4o/

[3] Derczynski, L., Harang, R., & Khan, S. (2025, February 25). *Defining LLM red teaming*. NVIDIA Technical Blog. https://developer.nvidia.com/blog/defining-llm-red-teaming/

[4] Torene, S. (2025, April 27). *Understanding the impact of increasing LLM context windows*. Meibel. https://www.meibel.ai/post/understanding-the-impact-of-increasing-llm-context-windows

[5] Google Project Zero. (n.d.). *Vulnerability disclosure policy*. https://googleprojectzero.blogspot.com/p/vulnerability-disclosure-policy.html

[6] Inie, N., Stray, J., & Derczynski, L. (2024). Summon a demon and bind it: A grounded theory of LLM red teaming. *PLoS ONE*, 19(1), e0314658. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0314658

[7] Google. (n.d.). *How Google handles security vulnerabilities*. https://about.google/company-info/appsecurity/

[8] OWASP. (2025). *OWASP top 10 for LLM applications*. https://genai.owasp.org/llm-top-10/

[9] Anthropic. (n.d.). *Model Context Protocol clients*. https://modelcontextprotocol.io/clients

[10] OWASP. (n.d.). *Vulnerability disclosure cheat sheet*. https://cheatsheetseries.owasp.org/cheatsheets/Vulnerability_Disclosure_Cheat_Sheet.html

---
*Note: All references have been archived in `docs/references/` with access dates recorded in `MANIFEST.yaml`*


