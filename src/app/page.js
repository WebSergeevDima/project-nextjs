import Button from "@/components/Button/Button";
import style from './page.module.css'

export default function Home() {

  return (
      <div>
          <h1>Заголовок главной страницы</h1>
          <div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, sint.</div>
          <div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at aut, culpa eaque enim facere fugiat fugit hic impedit in ipsa itaque modi molestiae mollitia nemo porro quaerat ratione reiciendis, reprehenderit sed sequi tempora vero? A ab amet asperiores, blanditiis cumque dignissimos ducimus eos explicabo labore maiores nemo perspiciatis porro quibusdam quis rem rerum saepe sed sequi similique voluptate? A ab accusamus, eos excepturi, ipsum itaque modi molestiae nesciunt ratione sit temporibus veniam veritatis vero. At beatae consequatur dolor fugiat illo iure, nulla placeat sit. Adipisci animi architecto aspernatur deleniti dolor, dolores, expedita, iure obcaecati perspiciatis possimus quae ullam veniam.</div>
        <Button text={'Портфолио'} url={'/portfolio'}/>
          <div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at aut, culpa eaque enim facere fugiat fugit hic impedit in ipsa itaque modi molestiae mollitia nemo porro quaerat ratione reiciendis, reprehenderit sed sequi tempora vero? A ab amet asperiores, blanditiis cumque dignissimos ducimus eos explicabo labore maiores nemo perspiciatis porro quibusdam quis rem rerum saepe sed sequi similique voluptate? A ab accusamus, eos excepturi, ipsum itaque modi molestiae nesciunt ratione sit temporibus veniam veritatis vero. At beatae consequatur dolor fugiat illo iure, nulla placeat sit. Adipisci animi architecto aspernatur deleniti dolor, dolores, expedita, iure obcaecati perspiciatis possimus quae ullam veniam.</div>

      </div>
  )
}
