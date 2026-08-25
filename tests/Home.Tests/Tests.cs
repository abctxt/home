namespace Home.Tests
{
    public class Tests
    {
        [Test]
        public async Task ScaffoldTest()
        {
            var value = new object();

            await Assert.That(value).IsNotNull();
        }
    }
}
