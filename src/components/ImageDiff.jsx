import Image from 'next/image'
import styles from './ImageDiff.module.css'

const ASSETS_PATH = '/assets/screenshots'

const ImageDiff = () => {
  return (
    <div className={styles.container}>
      <h2>Image Diff</h2>
      <div>
        <span>Latest</span>
        <Image
          alt='latest'
          src={`${ASSETS_PATH}/latest/chromium/home.png`}
          height='720'
          width='1280'
          />
      </div>
      <div>
        <span>Backup</span>
        <Image
          alt='backup'
          src={`${ASSETS_PATH}/backup/chromium/home.png`}
          height='720'
          width='1280'
          />
      </div>
      <div>
        <span>Diff</span>
        <Image
          alt='diff'
          src={`${ASSETS_PATH}/diff/chromium/home.png`}
          height='720'
          width='1280'
          />
      </div>
    </div>
  )
}

export default ImageDiff
