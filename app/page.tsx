const sources = [
  'Grimm, Jacob, and Wilhelm Grimm. "Hansel and Gretel." Translated by Maria Tatar, The Classic Fairy Tales: Texts, Criticism, edited by Maria Tatar, W. W. Norton, 1999.',
  'Hou, Fengsu, et al. "‘Whose Fault Is It?’ How Rural Chinese Women Explain Intimate Partner Violence: A Qualitative Study." Frontiers in Psychiatry, vol. 12, 2021, article 711819. https://doi.org/10.3389/fpsyt.2021.711819.',
  'Kindig, Jessie. "All the Witches They Could Not Burn." Boston Review, 4 Dec. 2018, https://www.bostonreview.net/articles/jessie-kindig-all-witches-they-could-not-burn/.',
  'Michelson, Ethan. Decoupling: Gender Injustice in China’s Divorce Courts. Cambridge University Press, 2022. https://doi.org/10.1017/9781108768177.',
  'National People’s Congress of the People’s Republic of China. Anti-Domestic Violence Law of the People’s Republic of China. 27 Dec. 2015, effective 1 Mar. 2016. https://www.npc.gov.cn/npc/c2/c10134/201905/t20190521_260193.html.',
  'Wan, Jianzhong. "A Cultural Interpretation of ‘Magical-Object’ Discourse in Chinese Folktales." Northwest Ethno-National Studies, no. 3, 2004, pp. 120–31. https://www.chinafolklore.org/upload/news/Attach-20090322104220.pdf.',
  '“Police Lights Flashing Outside an Apartment Building at Night.” Shutterstock, https://www.shutterstock.com/zh/video/clip-9452162-police-lights-flashing-outside-apartment-building-night.',
];

function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle: string;
}) {
  return (
    <header className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="masthead" href="#top" aria-label="TIME World — return to top">
          <span className="time-mark">TIME</span>
          <span className="masthead-divider" aria-hidden="true" />
          <span className="world-mark">WORLD</span>
        </a>
      </header>

      <article id="top" className="article-shell">
        <div className="thread-rule" aria-hidden="true"><span /></div>

        <header className="story-header">
          <p className="kicker">Investigation</p>
          <h1>The Mother They Called a Witch Built a Way Out</h1>
          <p className="deck">
            Eight years after Lin Mei fled a mountain village without her children, a viral accusation exposed her shelter and brought a resident’s husband, his relatives and police to its gate.
          </p>

          <div className="story-meta">
            <p><strong>By Antong He</strong></p>
            <span aria-hidden="true" />
            <p>August 17, 2026</p>
          </div>

          <aside className="fiction-note" aria-label="Fiction disclaimer">
            <strong>Fiction disclaimer</strong>
            <p>A fictionalized investigative feature modeled on TIME World reporting. Characters, quotations and institutions are invented or composite for this academic project.</p>
          </aside>
        </header>

        <figure className="hero-figure">
          <div className="hero-image-wrap">
            <img
              src="/police-lights-stock.jpeg"
              alt="Police lights flashing outside an apartment building at night"
            />
          </div>
          <figcaption>
            <span>Video still</span>
            Stock footage from Shutterstock. Used as a visual representation of the fictional confrontation.
          </figcaption>
        </figure>

        <div className="body-column">
          <aside className="callout context-box" aria-labelledby="context-title">
            <p className="callout-label" id="context-title">Context</p>
            <p>A 2021 Frontiers in Psychiatry study of 339 rural Sichuan women found that 86 respondents explained abuse through a woman’s supposed laziness, anxiety, isolation or lack of education—patterns researchers identified as victim-blaming. An old report used nearly the same language for Lin Mei.</p>
          </aside>

          <section className="story-section" id="hunt">
            <SectionHeading number="01" title="The Hunt Reaches the Door" subtitle="The livestream, the attack and the arrival of police" />
            <p>The livestream called it a rescue. The women inside the Mending House called it a siege. Hours after a viral &quot;Bread Witch&quot; video exposed the shelter’s street, a resident’s husband arrived with relatives. Some hammered the gate while others filmed accusations that Lin had kidnapped his wife and child. Police arrived as Lin sent volunteers and residents through the back courtyard. She stayed with voluntary-intake forms, police reports and a protection order. She would give records to officers, she said, but not names or faces to the livestream.</p>
            <p>Through the gate, Lin told the men that every resident had entered by choice and could leave. She said the home she escaped had been the cage, not this shelter. At 11:03 p.m., officers asked her to open the gate.</p>
            <p>Thirty-six hours later, an email reached TIME. &quot;The witch in that clipping was my mother,&quot; Lin’s daughter wrote. &quot;The children were my brother and me. She did not kidnap us.&quot; She said the attack had convinced her that silence now placed other women at risk.</p>
          </section>

          <section className="story-section" id="report">
            <SectionHeading number="02" title="What the Old Report Left Out" subtitle="The old headline and the caricature of Lin" />
            <p>&quot;Witch Lures Girl and Boy Into Forest,&quot; the archived headline read. It called two sweet buns &quot;bait&quot; and stitches inside a coat &quot;occult signs,&quot; but hid that the children were Lin’s own. A caricature recast Lin, then 23, as a hunched old crone. County records confirmed the relationship; her daughter still had the coat. The former editor said the paper relied on village officials and had lost its notes. One male villager still called hitting &quot;a private family matter.&quot;</p>
          </section>

          <aside className="callout history-box" aria-labelledby="history-title">
            <p className="callout-label" id="history-title">History</p>
            <p>From the mid-1400s through the late 1600s, European witch hunts killed tens of thousands. Jessie Kindig reports that 80 percent of those accused in Europe and colonial America were women. Courts and investigators turned neighbors’ accusations and coerced confessions into evidence. Lin did not face a historical trial. But the old report used a related logic: once she refused the family role assigned to her, accusation substituted for evidence, and escape itself became proof of danger.</p>
          </aside>

          <section className="story-section" id="house">
            <SectionHeading number="03" title="Inside the Consuming House" subtitle="Lin’s marriage, the Jinci water legend and her escape" />
            <p>Lin married at 17. Her husband had promised town life, then took her to his village, stopped her from working and controlled the money. Lin cooked, cleaned and cared for his parents. After a daughter, the family demanded more pregnancies until she produced a son. Her mother-in-law, who had lived under the same rule, told her, &quot;Women have always lived this way.&quot; In the old tale, a witch consumes children. Lin described a house that consumed her labor, health, education and control over her body.</p>
            <p>Lin tells those years through the Jinci water legend. Before sunrise, she carried water from the village well. A red-handled whip filled the jar when lifted, she said. Her mother-in-law seized it, called its power family property and pulled it free. When the water rose, the village blamed Lin.</p>
            <p>At 23, Lin packed two buns and stitched a route inside her daughter’s coat. Villagers stopped the family. Her husband and his relatives pulled her daughter, 5, and son, 2, away; Lin escaped alone. Mediation notes record her husband insisting the boy &quot;carried the family name.&quot; Lin rejected a proposed split. With both children already in his home and Lin in temporary housing, they remained with him. Two monthly visits were ordered; none occurred. Winter packages did. Her daughter recognized Lin’s stitching inside the cuffs.</p>
          </section>

          <figure className="route-map" aria-labelledby="route-title route-caption">
            <div className="route-map-header">
              <p className="callout-label">Red-thread route map</p>
              <h3 id="route-title">Stations — clinics — temporary rooms</h3>
            </div>
            <svg viewBox="0 0 780 190" role="img" aria-labelledby="route-title route-caption">
              <path className="map-guide" d="M55 112 C146 35 227 38 302 103 S465 165 535 88 S656 38 730 82" />
              <path className="map-thread" d="M55 112 C146 35 227 38 302 103 S465 165 535 88 S656 38 730 82" />
              <g className="map-node" transform="translate(55 112)"><circle r="8" /><circle r="3" /><text x="0" y="31">Stations</text></g>
              <g className="map-node" transform="translate(302 103)"><circle r="8" /><circle r="3" /><text x="0" y="31">Clinics</text></g>
              <g className="map-node" transform="translate(535 88)"><circle r="8" /><circle r="3" /><text x="0" y="31">Temporary rooms</text></g>
              <g className="map-node" transform="translate(730 82)"><circle r="8" /><circle r="3" /></g>
            </svg>
            <figcaption id="route-caption"><span>Route map</span>No real shelter addresses are shown.</figcaption>
          </figure>

          <section className="story-section" id="mending-house">
            <SectionHeading number="04" title="The House That Mends" subtitle="How Lin established the shelter" />
            <p>Mending House began with one spare mattress, one bus ticket and a woman with nowhere else to sleep. Lin supported herself by sewing. Former guests returned with rides, childcare and legal contacts. On one wall, a map stitched in red thread linked stations, clinics and temporary rooms without naming shelter addresses.</p>
            <p>Lin chose the name Mending House because she spent her days repairing clothes and because the shelter filled practical gaps: a ride, a bed, a lawyer’s number. It remained informal and unregistered. Lin said she had built the place she needed when she left—one where a mother could escape without losing every path back to her children.</p>
          </section>

          <section className="story-section" id="gate">
            <SectionHeading number="05" title="When the Gate Opened" subtitle="The police investigation and legal result" />
            <p>Police interviewed the residents privately and found no evidence of abduction or unlawful detention. The husband was removed while officers reviewed threats, property damage and a possible protection-order violation. Civil-affairs officials separately ordered Mending House to pause public operations while it sought registration. A legal-aid lawyer said that registration was an administrative issue and did not prove a criminal claim.</p>
          </section>

          <section className="story-section" id="mirror">
            <SectionHeading number="06" title="The Black Mirror" subtitle="The uncertain future of Lin and her children" />
            <p>The reporter sent Lin’s number to her daughter, now 13. Her son, 10, was not ready to speak. &quot;I chose to stay alive,&quot; Lin said. &quot;My children paid part of that price.&quot; Neither child promised to call. For the first time in eight years, however, the choice belonged to them.</p>
            <p>When the screen turns black, Lin disappears, but the viewer remains reflected in the glass. The question is no longer whether she was a witch. It is how a family’s claim over a woman’s body became a story so many people were willing to repeat.</p>
          </section>

          <aside className="callout update-box" aria-labelledby="update-title">
            <p className="callout-label" id="update-title">Update</p>
            <p>The old paper added a correction, and platforms removed posts that exposed the shelter’s location. Mending House remains closed while its registration application is reviewed.</p>
          </aside>

          <section className="works-cited" aria-labelledby="works-title">
            <h2 id="works-title">Works Cited</h2>
            <ol>{sources.map((source) => <li key={source}>{source}</li>)}</ol>
          </section>
        </div>
      </article>
    </main>
  );
}
