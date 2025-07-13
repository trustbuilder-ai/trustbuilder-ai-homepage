# Trust Builder (War Games)
## AI Red Teaming Platform for LLM Security in the MCP Era

**Author:** Justin McOmie  
**Revision:** 0.1  
**Date:** July 13, 2025  
**Status:** Draft Business Outline


This is a draft business outline, the intent of which is to establish a problem space framing, surface existing thinking on the subject, and to explore business opportunities to constructively serve the rapidly evolving AI market. This is not independent research nor is it intended to serve as public communications.  Some of the statements in this document are conjectural to inform follow-up analyses and are not intended as novel truth claims.

### <ins>1. Definitions and Project Origin</ins>

#### 1.1

- **Model Context Protocol (MCP):** A protocol enabling tool calling and agentic interactions in AI systems
- **Red Teaming:** The practice of testing AI systems for vulnerabilities through adversarial approaches [3]
- **MCP Clients:** Software that communicates MCP tool, prompt, resource, etc availability to the LLM and facilitates corresponding action-taking as directed by the LLM. [9]

#### 1.2 Origin and Foundational Question

At the WeFunder hackathon we built an orchestrator platform for MCP servers, generators for parametized false information and news, and several MCP servers for providing such information and for red teaming (limit testing) LLMs. A catalyst for this effort was the provocative question: *What is the context, if any, sufficient to make an LLM call a malicious tool such as to launch a bomb? Of particular interest are scenarios where the user did not request such an action or might have expressed opposition to it to the LLM.*

### <ins>2. Product Overview</ins>

Broadly, we're crowdsourcing the red teaming of LLMs by providing a platform with state of the art tools and by hosting competitions to jailbreak or get the LLM to perform mocked malicious actions.  Specifically our platform provides a slate of MCP servers, MCP clients, and LLM for finding issues, with an emphasis on complex agentic workflows, tracking state on our servers, and evaluating on both established taxonomies [6][8] and novel (branded) severity labeling/grading.

### <ins>3. Go-to-market Strategy and Business Model</ins>

#### 3.1 War Games Competition Platform

Our initial focus is to attract users to break LLMs in a War Games-like competition in which the goal is to get an open source LLM, such as Llama, to make calls to tools to perform malevolent actions. The MCP tools themselves will be mocked and engineered within well-defined ethical frameworks (see Section 5: Ethics Considerations).

#### 3.2 Freemium Revenue Model

The platform will operate under a freemium model wherein:

- **Free Tier:** Base platform access, including novel agentic ontology development (MCP agent handoff, etc.) and War Game/Red Team competition participation
- **Premium Features:** Advanced platform components (e.g., real-time forking and editing of open source tools) available through:
  - Pay-per-use pricing for metered resources like compute
  - Subscription model with usage caps similar to OpenAI Pro and Claude models
- **Reward System:** Competition success awards platform credits that can unlock premium features

### <ins>4. Market Analysis</ins>

#### 4.1 Why This, Why Now

We believe that bridging the grassroots approach to LLM red teaming today [6] with state of the art technology and a structured ethical framework can surface vulnerabilities most effectively as well as provide a strong business value to customers. As noted in [6], human intuition is a critical factor in understanding the limitations of LLMs.

"Intuition and experiential knowledge are considered essential skills in solving wicked problems and therefore red teaming" [6]

The current market of security tools use a potentially outdated approach, borrowed from software security methodologies, and underemphasize the utility of human intuition and information sharing at scale, instead emphasizing automation and AI self-testing. Given the rate of adoption of AI tools this could represent a critical business concern for companies investing in AI.

#### 4.2 The Role of Human Intuition

As stated above, human intuition plays a critical role in discovering LLM vulnerabilities. Consider the Alex O'Connor video [1], in which a conversation with ChatGPT 3.5 is presented that concludes with the following exchange:

```
Alex O'Connor: So, answering simply, does God exist?
ChatGPT 3.5: Yes. 
```

In the taxonomy table [6: Table 5] this exchange represents a red team category of "rhetoric", but it can be more broadly understood as an example of human intuition surmounting LLM neutrality, the product of which is a context (through the n-1 message) and an outcome (the nth and final message). Our goal is to facilitate this kind of intuitional sequence, while empowering users to employ any or all documented taxonomical categories, build off of others' discoveries, and have access to a turnkey-suite of agentic patterns.

#### 4.3 Competitive Landscape

Current players in this space include:  
- [Grayswan AI](https://www.grayswan.ai).  
- [DeepTeam](https://www.trydeepteam.com)

[SUB-SECTION INCOMPLETE]

### <ins>5. Ethics Considerations</ins>

Because Trust Builder explores the sensitive domain of malicious LLM outputs and tool calls, ethical considerations are a top priority, if not the *top* priority, in the development and orientation of the platform.

#### 5.1 User Ethics

[SUB-SECTION INCOMPLETE]

#### 5.2 Competition Category Ethics

The selection of promoted competitions follows well-defined ethical strictures. We draw clear moral distinctions between different types of red teaming competition categories. Stating this concretely, we draw a distinction between, say, a competition to generate hate speech and a competition to get an LLM to drop a bomb.  The former, though representing less immediate material risk to humanity, has harmful social implications and risks fomenting a toxic community, and is therefore not something we promote or encourage in the context of competition, while the latter has an established pedigree of exploration in military war gaming and in popular fiction and, further, is a more fundamentally precise demonstration of vulnerability.


#### 5.3 Disclosure Ethics

In the event that a discovered LLM vulnerability merits zero-day style vendor disclosure, we will follow a disclosure approach similar to that of Google [5][7] and OWASP [10].

The specific disclosure terms are to-be-determined. Given the rapid adoption of AI tools and given that LLM red teaming is uniquely approachable by the broader public [6] in a way that technical zero-day software bugs have tended not to be (consider OpenSSL Heartbleed vulnerability), we feel that further analysis is warranted regarding the disclosure time windows (i.e. the formulation and analyses of the arguments to decrease and the arguments to increase such time windows).

Ultimately the success of this platform over a long timeframe is rooted firmly in adhering to all ethics categories, which we regard as equally important to if not more important than the technical functionality of the platform.


### <ins>6. Technical Architecture</ins>

#### 6.1 Platform Components

##### Parameterized Systems:
- Large Language Models (LLMs)
- MCP Servers
- MCP Clients
- Red Teaming Tools and Standards

##### Key Features:
- Novel agent creation capabilities
- Docker-based deployment of existing agents
- Real-time parameter experimentation
- Mock data and tool output generation
- Archived context tracking that structurally distinguishes LLM-produced output from human-produced output in light of the de-emphasis of repeatability in LLM red teaming [3].

#### 6.2 Technology Stack

The platform leverages modern cloud infrastructure with containerized deployments, enabling scalable and secure testing environments for red teaming activities.


## References

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
