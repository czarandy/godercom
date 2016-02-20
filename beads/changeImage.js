function changeImage(target, source)
{
    if (document.getElementById(target))
    {
        document.getElementById(target).src = source;
    }
    else if (document[target])
    {
        document[target].src = source;
    }
}