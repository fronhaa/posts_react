import styles from './Comment.module.css';

import { Avatar } from '../Avatar/Avatar';

export function Comment({comment, avatarUrlComment, authorComment, authorRoleComment}) {
    return (
        <div className={styles.container}>
            <Avatar src={avatarUrlComment} hasBorder={false} />

            <div className={styles.containerContent}>
                <div className={styles.content}>
                    <div>
                        <div className={styles.trash}>
                            <strong>{authorComment}</strong>
                            <i class="fa-regular fa-trash-can"></i>
                        </div>
                        <span>{authorRoleComment}</span>
                    </div>
                   
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus repellendus, ipsa molestias fugit, sed deserunt commodi perferendis quibusdam, temporibus illo illum. Delectus corrupti modi suscipit quo illo, eveniet animi minima?</p>
                </div>

                <div className={styles.applaud}>
                    <i class="fa-regular fa-thumbs-up"></i>
                    <span>Aplaudir</span>
                </div>
            </div>
        </div>        
    );
}