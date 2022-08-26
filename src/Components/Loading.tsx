import { SpinnerContent, SpinnerOverlay } from './LoadingStyles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export function Loading() {
  return (
    <SpinnerOverlay>
      <SpinnerContent>
        <FontAwesomeIcon icon={faSpinner} />
      </SpinnerContent>
    </SpinnerOverlay>
  )
}
