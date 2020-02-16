import discord
from discord.ext import commands

import random
import sys
import traceback
import asyncio
import datetime
import json

from datetime import datetime

from cv import *

@bot.command(aliases=["botclear", "botclean", "clean", "clear", "fuckoffbots"])
@commands.has_permissions(manage_messages=True)
async def bc(ctx):
    def check(m):
        return m.author.bot
    await ctx.message.delete()
    await ctx.message.channel.purge(limit=100, check=check)
    await ctx.send("<a:speedclean:653273382812647425>")
    
@bc.error
async def bc_error(error, ctx):
    if isinstance(error, commands.CheckFailure):
        await ctx.message.add_reaction("❌")
        return
    else:
        print('Ignoring exception in command {}:'.format(ctx.command), file=sys.stderr)
        traceback.print_exception(type(error), error, None, file=sys.stderr)
