class Timer 
{
    constructor(durationInput, startButton, pauseButton, callbacks)
    {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        if(callbacks)
        {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
            this.onPause = callbacks.onPause
        }
        
        this.startButton.addEventListener("click", this.start)
        this.pauseButton.addEventListener("click",this.pause)
    }

    start = () =>
    {
        if(this.onStart)
        {
            this.onStart(this.timeRemaining)
        }
        this.tick()
        this.interval = setInterval(this.tick,50)
    }

    pause = () =>
    {
        if(this.onPause)
        {
            this.onPause()
        }
        clearInterval(this.interval)
    }
    
    tick = () =>
    {
        if(this.onTick)
        {
            this.onTick(this.timeRemaining)
        }

        if(this.timeRemaining <= 0)
        {
            if(this.onComplete)
            {
                this.onComplete()
            }
            this.pause()
        }
        else
        {
            this.timeRemaining = this.timeRemaining - .05
        }
    }

    get timeRemaining()
    {
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time)
    {
        this.durationInput.value = time.toFixed(2)
    }
}